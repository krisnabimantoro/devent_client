<template lang="">
  <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <Card v-for="event in events" :key="event.id" class="w-[350px]">
      <CardHeader>
        <CardTitle>{{ event.name_event }}</CardTitle>
        <img
          :src="event.event_detail.image_event ? `${imageBaseUrl}/${event.event_detail.image_event}` : '@/assets/join.jpg'"
          alt="Event Image"
          class="rounded-xl box-content h-32 w-32"
        />
        <CardDescription>{{ event.event_detail.description }}</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label class="font-bold" for="date_event">Date Event</Label>
            <p class="text-sm">{{ event.event_detail.date_event }}</p>
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label class="font-bold" for="name_location">Name Location</Label>
            <p class="text-sm">{{ event.event_detail.name_location }}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex gap-4 justify-end px-6 pb-6">
        <Button variant="outline" @click="updateEvent(event.id)">Update</Button>
        <Button variant="destructive" @click="deleteEvent(event.id)">Delete</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "@/api/index.ts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const events = ref([]);
const imageBaseUrl = "http://localhost:8012/storage/events";

const fetchEvents = async () => {
  try {
    const response = await api.get("/api/event"); // Fetch all events
    events.value = response.data;
  } catch (error) {
    console.error("Error fetching events data:", error);
  }
};
const name_event = ref("");
const description = ref("");

const updateEvent = async (id: number) => {
  console.log("Update event:", id);

  const formData = new FormData();
  formData.append("name_event", "acumalaka");
  formData.append("description", "asdas");

  const jsonObject = {};
  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });

  await api.patch(`/api/event/${id}`, jsonObject);
  console.log(`Event ${id} update successfully`);
};

const deleteEvent = async (id: number) => {
  try {
    await api.delete(`/api/event/${id}`);
    console.log(`Event ${id} deleted successfully`);
    events.value = events.value.filter((event) => event.id !== id);
  } catch (error) {
    console.error("Error deleting event:", error);
  }
};

onMounted(() => {
  fetchEvents(); // Fetch all events on component mount
});
</script>
