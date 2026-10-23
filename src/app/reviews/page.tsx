import type { Metadata } from "next";
import { ReviewsView } from "./ReviewsView";

export const metadata: Metadata = {
  title: "Client Reviews & Ratings | Glow Unisex Salon Rajouri Garden",
  description:
    "Read verified salon reviews and guest experiences at Glow Unisex Salon in Rajouri Garden, New Delhi. 5.0-star craft across hair, balayage, skin, and bridal styling.",
};

export default function ReviewsPage() {
  return <ReviewsView />;
}
