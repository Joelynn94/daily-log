// import { Container, Flex, Heading, Text, Card, Badge } from "@radix-ui/themes";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import APIComponent from "@/components/API";
import { ModeToggle } from "@/components/theme-toggle";

export default async function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <APIComponent />

      <ModeToggle />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Coding Issue Tracker</CardTitle>
          <CardDescription>
            Here you can find the issues relevant yo your certain projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Issue 1
          </h3>
          <p className="text-sm text-muted-foreground">Issue 1 description</p>
          <Badge>Issue 1 status</Badge>
        </CardContent>
      </Card>
    </main>
  );
}
