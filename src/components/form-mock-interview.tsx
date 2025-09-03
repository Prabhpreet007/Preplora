// import { Interview } from "@/types"

import type { Interview } from "@/types"
import { CustomBreadCrumb } from "./custom-bread-crumb"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import {  useNavigate } from "react-router"
import { toast } from "sonner"
import {  Loader, Trash2 } from "lucide-react"
import { Headings } from "./headings"
import { Button } from "./ui/button"
import { Separator } from "@radix-ui/react-separator"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useAuth } from "@clerk/clerk-react"
import { chatSession } from "@/scripts"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "./config/firebase.config"


interface FormMockInterviewProps {
  initialData: Interview | null
}

const formSchema = z.object({
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be 100 characters or less"),

  description: z
    .string()
    .min(10, "Description is required"),

  experience: z.coerce
    .number()
    .min(0, "Experience cannot be empty or negative"),

  techStack: z
    .string()
    .min(1, "Tech stack must be at least a character"),
});

type FormData = z.infer<typeof formSchema>


export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {

  // const form = useForm<FormData>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: initialData || {
  //     position: "",
  //   description: "",
  //   experience: 0,
  //   techStack: "",
  //   }
  // })


  type Schema = typeof formSchema;
type SchemaInput = z.input<Schema>;   // before parsing (experience: unknown)
type SchemaOutput = z.output<Schema>; // after parsing (experience: number)

const form = useForm<SchemaInput, undefined, SchemaOutput>({
  resolver: zodResolver(formSchema),
  defaultValues: initialData || {
    position: "",
    description: "",
    experience: 0,
    techStack: "",
  },
})



  const { isValid, isSubmitting } = form.formState
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();

  const title = initialData?.position
    ? initialData?.position
    : "Create a new Mock Interview";

  const breadCrumpPage = initialData?.position
    ? initialData?.position
    : "Create";

  const actions = initialData ? "Save Changes" : "Create";

  const toastMessage = initialData
    ? { title: "Updated..!", description: "Changes saved successfully..." }
    : { title: "Created..!", description: "New Mock Interview created..." };


  const cleanAiResponse = (responseText: string) => {
    let cleanText = responseText.trim();

    cleanText = cleanText.replace(/{json`+`}/g, "");

    // Step 3: Extract a JSON array by capturing text between square brackets
    const jsonArrayMatch = cleanText.match(/\[.*\]/s);
    if (jsonArrayMatch) {
      cleanText = jsonArrayMatch[0];
    } else {
      throw new Error("No JSON array found in response");
    }

    // Step 4: Parse the clean JSON text into an array of objects
    try {
      return JSON.parse(cleanText);
    } catch (error) {
      throw new Error("Invalid JSON format: " + (error as Error)?.message);
    }
  }


  const generateAiResponse = async (data: FormData) => {


    const prompt = `
As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

[
  { "question": "<Question text>", "answer": "<Answer text>" },
  ...
]

Job Information:
- Job Position: ${data?.position}
- Job Description: ${data?.description}
- Years of Experience Required: ${data?.experience}
- Tech Stacks: ${data?.techStack}

The questions should assess skills in ${data?.techStack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
`;
    const aiResult = await chatSession.sendMessage(prompt);
    const cleanedResponse = cleanAiResponse(aiResult.response.text())

    return cleanedResponse
  }

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      if (initialData) {
        if (isValid) {
          const aiResult = await generateAiResponse(data)

          await updateDoc(doc(db, "interviews", initialData?.id), {
            questions: aiResult,
            ...data,
            updatedAt: serverTimestamp(),
          });

          toast(toastMessage.title, {
            description: toastMessage.description
          })
        }
      } else {

        // create a new mock interview
        if (isValid) {
          const aiResult = await generateAiResponse(data)
          await addDoc(collection(db, "interviews"), {
            ...data,
            userId,
            questions: aiResult,
            createdAt: serverTimestamp(),
          });
          toast(toastMessage.title, { description: toastMessage.description })

        }

      }
      // TODO: Add API call or database save logic here
      navigate("/generate", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Error..", {
        description: `Something went wrong. Please try again later`,
      });
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    if (initialData) {
      form.reset({
        position: initialData.position,
        description: initialData.description,
        experience: initialData.experience,
        techStack: initialData.techStack
      })
    }
  }, [initialData, form])

  return (
    <div className="w-full flex-col space-y-4">

      <CustomBreadCrumb
        breadCrumbPage={breadCrumpPage}
        breadCrumbItems={[{ label: "Mock Interviews", link: "/generate" }]}
      />

      <div className="mt-4 flex items-center justify-between w-full">
        <Headings title={title} isSubHeading />
        {initialData && (
          <Button size={"icon"} variant={"ghost"}>
            <Trash2 className="min-w-4 min-h-4 text-red-500" />
          </Button>
        )}
      </div>

      <Separator className="my-4" />

      <div className="my-6"></div>

      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full p-8 rounded-lg flex flex-col items-start justify-start gap-6 shadow-md"
        >
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Job Role / Job Position</FormLabel>
                  <FormMessage className="text-sm " />
                </div>

                <FormControl>
                  <Input

                    disabled={loading}
                    className="h-12"
                    placeholder="eg:- Full stack developer"
                    {...field}
                    value={field.value || ""}


                  />
                </FormControl>
              </FormItem>
            )}
          />



          {/* description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Job Description</FormLabel>
                  <FormMessage className="text-sm " />
                </div>

                <FormControl>
                  <Textarea
                    {...field}
                    disabled={loading}
                    className="h-12"
                    placeholder="eg:- describe your job role or position..."
                    value={field.value || ""}

                  />
                </FormControl>
              </FormItem>
            )}
          />


          {/* experience */}
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Years of experience</FormLabel>
                  <FormMessage className="text-sm " />
                </div>

                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    disabled={loading}
                    className="h-12"
                    placeholder="eg:- 5"
                    value={field.value as number | string || ""}

                  />
                </FormControl>
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Tech Stacks</FormLabel>
                  <FormMessage className="text-sm " />
                </div>

                <FormControl>
                  <Textarea
                    {...field}
                    disabled={loading}
                    className="h-12"
                    placeholder="e.g.: React, TypeScript... (separate the values using commas)"

                    value={field.value || ""}


                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="w-full flex items-center justify-end gap-6">
            <Button
              type="reset"
              size="sm"
              variant="outline"
              disabled={isSubmitting || loading}
            >
              Reset
            </Button>

            <Button
              type="submit"
              size="sm"
              disabled={isSubmitting || loading || !isValid}
            >
              {loading ? (
                <Loader className="text-gray-50 animate-spin" />
              ) : (
                actions
              )}
            </Button>
          </div>


        </form>
      </FormProvider>
    </div>
  )
}
