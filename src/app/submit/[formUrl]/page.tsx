import { GetFormContentByUrl } from "@/actions/form";
import { FormElementInstance } from "@/components/dashboard/FormElements";
import FormSubmitComponent from "@/components/common/FormSubmitComponent";
import React from "react";

async function SubmitPage({
  params,
}: {
  params: {
    formUrl: string;
  };
}) {
  const form = await GetFormContentByUrl(params.formUrl);

  console.log(form)

  if (!form) {
    throw new Error("form not found");
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <>
    {
      form.typePermission === "public" ?
        <FormSubmitComponent formUrl={params.formUrl} content={formContent} />
        : <h1>Form is private</h1>
    }
  </>;
}

export default SubmitPage;
