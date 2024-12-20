<template lang="">
  <div class="container my-20">
    <form @submit.prevent="storePost()">
      <FormField v-slot="{ componentField }" name="name_event">
        <FormItem>
          <FormLabel class="text-primary">Name Event</FormLabel>
          <FormControl>
            <Input type="text" v-model="name_event" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="description">
        <FormItem>
          <FormLabel class="text-primary">Description</FormLabel>
          <FormControl>
            <Input type="text" placeholder="shadcn" v-model="description" v-bind="componentField" />
          </FormControl>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="name_location">
        <FormItem>
          <FormLabel class="text-primary">Name Location</FormLabel>
          <FormControl>
            <Input type="text" placeholder="shadcn" v-model="name_location" v-bind="componentField" />
          </FormControl>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="date_event">
        <FormItem>
          <FormLabel class="text-primary">Date Event</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger as-child>
                <Button variant="outline" :class="cn('w-full justify-start text-left font-normal', !valueDate && 'text-muted-foreground')">
                  <CalendarIcon class="mr-2 h-4 w-4" />
                  {{ valueDate ? df.format(valueDate.toDate(getLocalTimeZone())) : "Pick a date" }}
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <Calendar v-model="valueDate" initial-focus />
              </PopoverContent>
            </Popover>
          </FormControl>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="image_event">
        <FormItem>
          <FormLabel class="text-primary">Image Event</FormLabel>
          <FormControl>
            <Input type="file" @change="handleFileChange($event)" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
        </FormItem>
      </FormField>

      <Button class="bg-sec_primary mt-4" type="submit"> Submit </Button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  })
);

const form = useForm({});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { DateFormatter, type DateValue, getLocalTimeZone } from "@internationalized/date";
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { ref } from "vue";

const df = new DateFormatter("en-US", {
  dateStyle: "long",
});

const value = ref<DateValue>();

//import router
import { useRouter } from "vue-router";

//import api

import api from "@/api/index.ts";

const router = useRouter();

const name_event = ref("");
const description = ref("");
const name_location = ref("");
const valueDate = ref("");
const image = ref("");
const errors = ref([]);

const handleFileChange = (e) => {
  //assign file to state
  image.value = e.target.files[0];
};

const storePost = async () => {
  // Reset errors state
  errors.value = [];

  // Validate required fields
  if (!name_event.value) errors.value.push("Event name is required.");
  if (!description.value) errors.value.push("Description is required.");
  if (!name_location.value) errors.value.push("Location name is required.");
  if (!valueDate.value) errors.value.push("Date is required.");
  if (!image.value) errors.value.push("Image is required.");

  if (errors.value.length > 0) return;

  try {
    // Initialize formData
    const formData = new FormData();
    formData.append("name_event", name_event.value);
    formData.append("description", description.value);
    formData.append("name_location", name_location.value);
    formData.append("date_event", valueDate.value);
    formData.append("image_event", image.value);

    // Store data with API
    await api.post("/api/event", formData);

    // Redirect after successful post
    router.push({ path: "/" });
  } catch (error) {
    // Handle API errors
    if (error.response && error.response.data) {
      errors.value = error.response.data.errors || ["An unexpected error occurred."];
    } else {
      errors.value = ["Unable to connect to the server."];
    }
  }
};
</script>
<style lang=""></style>
