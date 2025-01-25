import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import Preloader from "../../../components/Preloader/Preloader";
import HeaderTwo from "../../../components/Header/HeaderTwo";
import Events from "../../../components/data/events";

const EventDetailsModules = lazy(() => import("../../../modules/EventDetails"));

export default function EventDetails() {

  const { slug } = useParams();

  const singleEvent = Events.filter((Event) => Event.slug === slug);
  const EventItem =
    singleEvent.length > 0
      ? singleEvent[0]
      : { title: "Event not found", content: "No content available." };

  return (
    <main>
      <HeaderTwo />

      <Suspense fallback={<Preloader />}>
        <EventDetailsModules item={EventItem} />
      </Suspense>

      <Footer />
    </main>
  );
}
