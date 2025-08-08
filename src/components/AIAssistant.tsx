"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { gardeningAssistant, type GardeningAssistantInput } from '@/ai/flows/gardening-assistant';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';

const FormSchema = z.object({
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
});

export default function AIAssistant() {
  const [loading, setLoading] = useState(false);
  const [tips, setTips] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      location: "",
    },
  });

  async function onSubmit(data: GardeningAssistantInput) {
    setLoading(true);
    setTips(null);
    try {
      const result = await gardeningAssistant(data);
      setTips(result.tips);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem generating your gardening tips. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Sparkles className="text-primary w-6 h-6" />
            <span>Personalized Tips</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Location (e.g., "Paris, France")</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a city, state, or country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Get Gardening Tips'
              )}
            </Button>
          </form>
        </Form>

        {loading && (
          <div className="mt-6 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Our AI is digging for the best tips...</p>
          </div>
        )}

        {tips && (
          <Card className="mt-6 bg-accent/30">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Your Custom Gardening Plan</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: tips.replace(/\n/g, '<br />') }} />
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
