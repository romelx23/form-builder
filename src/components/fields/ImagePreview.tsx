"use client";

import { ElementsType, FormElement, FormElementInstance } from "../dashboard/FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
// import useDesigner from "../hooks/useDesigner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { LuImage } from "react-icons/lu";
import { useDesigner } from "@/hooks/useDesigner";
import { Slider } from "../ui/slider";


const type: ElementsType = "ImagePreview";

const extraAttributes = {
    title: "Image Preview",
};

const propertiesSchema = z.object({
    title: z.string().min(2).max(300),
    width: z.number().min(0).max(100).optional(),
    height: z.number().min(0).max(100).optional(),
    borderRadius: z.number().min(0).max(100).optional(),
    borderWidth: z.number().min(0).max(100).optional(),
    borderColor: z.string().optional(),
    boxShadow: z.string().optional(),
    padding: z.string().optional(),
    margin: z.string().optional(),
    rotate: z.number().min(0).max(360).optional(),
});

export const ImagePreviewFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes,
    }),
    designerBtnElement: {
        icon: LuImage,
        label: "Image Preview",
    },
    designerComponent: DesignerComponent,
    formComponent: FormComponent,
    propertiesComponent: PropertiesComponent,

    validate: () => true,
};

type CustomInstance = FormElementInstance & {
    extraAttributes: typeof extraAttributes;
};

function DesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as CustomInstance;
    const { title } = element.extraAttributes;
    return (
        <div className="flex flex-col gap-2 w-full h-[300px] relative">
            <Label className="text-muted-foreground">Image Preview</Label>
            {/* <p className="text-xl">{title}</p> */}
            <img
                src={title}
                alt="Placeholder"
                className="w-36 h-auto object-contain rounded-lg top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            // className="w-full h-full max-w-96 object-contain rounded-lg"
            />
        </div>
    );
}

function FormComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as CustomInstance;

    const { title } = element.extraAttributes;
    return <img
        src={title}
        alt="Placeholder"
        // className="w-1/2 h-1/2 object-contain rounded-lg" 
        className="w-full h-full max-w-96 object-contain rounded-lg"
    />;
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

function PropertiesComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as CustomInstance;
    const { updateElement } = useDesigner();
    const form = useForm<propertiesFormSchemaType>({
        resolver: zodResolver(propertiesSchema),
        mode: "onBlur",
        defaultValues: {
            title: element.extraAttributes.title,
        },
    });

    useEffect(() => {
        form.reset(element.extraAttributes);
    }, [element, form]);

    function applyChanges(values: propertiesFormSchemaType) {
        const {
            title,
            width,
            height,
            borderRadius,
            borderWidth,
            borderColor,
            boxShadow,
            padding,
            margin,
            rotate,
        } = values;
        updateElement(element.id, {
            ...element,
            extraAttributes: {
                title,
                width,
                height,
                borderRadius,
                borderWidth,
                borderColor,
                boxShadow,
                padding,
                margin,
                rotate
            },
        });
    }

    return (
        <Form {...form}>
            <form
                onBlur={form.handleSubmit(applyChanges)}
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="space-y-3"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Url</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") e.currentTarget.blur();
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <FormField
                    control={form.control}
                    name="width"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Width</FormLabel>
                            <FormControl>
                                <Slider
                                    // {...field}
                                    defaultValue={[50]}
                                    min={0}
                                    max={100}

                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Height</FormLabel>
                            <FormControl>
                                <Slider
                                    // {...field}
                                    defaultValue={[50]}
                                    min={0}
                                    max={100}

                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="borderRadius"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Border Radius</FormLabel>
                            <FormControl>
                                <Slider
                                    // {...field}
                                    defaultValue={[50]}
                                    min={0}
                                    max={100}

                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="borderWidth"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Border Width</FormLabel>
                            <FormControl>
                                <Slider
                                    // {...field}
                                    defaultValue={[50]}
                                    min={0}
                                    max={100}

                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}

                />

                <FormField
                    control={form.control}
                    name="borderColor"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Border Color</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") e.currentTarget.blur();
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="boxShadow"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Box Shadow</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") e.currentTarget.blur();
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="padding"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Padding</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    {...field}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") e.currentTarget.blur();
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="margin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Margin</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    {...field}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") e.currentTarget.blur();
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="rotate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rotate</FormLabel>
                            <FormControl>
                                <Slider
                                    // {...field}
                                    defaultValue={[50]}
                                    min={0}
                                    max={360}

                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
            </form>
        </Form>
    );
}