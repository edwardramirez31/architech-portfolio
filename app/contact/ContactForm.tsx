import React, { useState } from 'react';

import { useForm as useFormspreeForm } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Type your name' }).max(50),
  email: z.string().email('Type a valid email'),
  message: z.string().min(2, { message: 'Type your message here' }),
});

const ContactForm: React.FunctionComponent = () => {
  const [formState, handleSubmit] = useFormspreeForm('xgegojvq');
  const [showAlert, setShowAlert] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
    console.log(values);
    await handleSubmit({
      ...values,
    });
    form.reset();
    setShowAlert((prevState) => !prevState);
    setTimeout(() => {
      setShowAlert((prevState) => !prevState);
    }, 5000);
  }

  return (
    <div className="container mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 p-4 sm:p-10 bg-[#27272c] roundex-xl"
        >
          <div className="grid grid-cols-1 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-48 resize-none"
                      placeholder="Enter your message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {showAlert && (
            <p>
              {formState.succeeded
                ? 'Message sent succesfully!'
                : 'Something went wrong. Try again.'}
            </p>
          )}
          <Button
            type="submit"
            variant="default"
            size="md"
            className="w-full md:max-w-48"
          >
            Send message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
