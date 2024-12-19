<template lang="">
  <div class="container my-20">
    <form @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="name_event">
        <FormItem>
          <FormLabel class="text-primary">Name Event</FormLabel>
          <FormControl>
            <Input type="text" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
          
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="description">
        <FormItem>
          <FormLabel class="text-primary">Description</FormLabel>
          <FormControl>
            <Input type="text" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
          
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="name_location">
        <FormItem>
          <FormLabel class="text-primary">Name Location</FormLabel>
          <FormControl>
            <Input type="text" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
          
        </FormItem>
      </FormField>

      <Button class="bg-sec_primary mt-4" type="submit"> Submit </Button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
 
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/utils'
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const value = ref<DateValue>()

</script>
<style lang=""></style>
