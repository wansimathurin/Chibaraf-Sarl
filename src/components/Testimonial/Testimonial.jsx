"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const defaultTestimonials = [
	{
		id: 1,
		quote:
			"Chibaraf's produce transformed our farm-to-table offering. Quality and service are outstanding — we couldn't be happier.",
		name: "Amina T.",
		role: "Restaurant Owner",
		avatar: "/testimonials/aisha.jpg",
		rating: 5,
	},
	{
		id: 2,
		quote:
			"Reliable, sustainable and consistent. The team at Chibaraf truly understands organic agriculture.",
		name: "Samuel K.",
		role: "Wholesale Buyer",
		avatar: "/testimonials/jeanpaul.jpg",
		rating: 5,
	},
	{
		id: 3,
		quote:
			"Partnering with Chibaraf helped us scale with confidence — excellent products and communication.",
		name: "Lydia M.",
		role: "Cooperative Manager",
		avatar: "/testimonials/fatou.jpg",
		rating: 4,
	},
];

const Testimonial = ({ testimonials = defaultTestimonials }) => {
	const [index, setIndex] = useState(0);
	const active = testimonials[index];

	const prev = () =>
		setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
	const next = () => setIndex((i) => (i + 1) % testimonials.length);

	return (
		<section id="testimonials" className="py-20 bg-gray-50">
			<div className="container mx-auto px-5 md:px-20">
				<div className="mb-8">
					<div className="text-center">
						<h4 className="text-green-600 font-semibold uppercase mb-2">
							Testimonials
						</h4>
						<h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
							What Clients Say
						</h2>
					</div>

					<div className="mt-4 flex items-center justify-center md:justify-end gap-2">
						<button
							aria-label="Previous testimonial"
							onClick={prev}
							className="p-2 rounded-md bg-white shadow hover:bg-gray-100 transition"
						>
							<ChevronLeft size={18} />
						</button>
						<button
							aria-label="Next testimonial"
							onClick={next}
							className="p-2 rounded-md bg-white shadow hover:bg-gray-100 transition"
						>
							<ChevronRight size={18} />
						</button>
					</div>
				</div>

				<div className="max-w-3xl mx-auto">
					<AnimatePresence mode="wait">
						<motion.blockquote
							key={active.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}
							className="relative bg-white rounded-2xl shadow-lg p-8 md:p-10"
						>
							<p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
								“{active.quote}”
							</p>

							<div className="flex items-center gap-4">
								{active.avatar ? (
									// eslint-disable-next-line @next/next/no-img-element
									<img
										src={active.avatar}
										alt={active.name}
										className="h-12 w-12 rounded-full object-cover shadow-sm"
									/>
								) : (
									<div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
										{active.name
											.split(" ")
											.map((n) => n[0])
											.slice(0, 2)
											.join("")}
									</div>
								)}

								<div>
									<div className="flex items-center gap-2">
										<h3 className="font-semibold text-gray-900">
											{active.name}
										</h3>
										<span className="text-sm text-gray-500">
											— {active.role}
										</span>
									</div>
									<div className="flex items-center mt-1 text-amber-500">
										{Array.from({ length: 5 }).map((_, i) => (
											<Star
												key={i}
												size={14}
												className={
													i < active.rating
														? "text-amber-400"
														: "text-gray-200"
												}
											/>
										))}
									</div>
								</div>
							</div>

							{/* pager dots */}
							<div className="flex items-center justify-center gap-2 mt-6">
								{testimonials.map((t, i) => (
									<button
										key={t.id}
										aria-label={`Go to testimonial ${i + 1}`}
										onClick={() => setIndex(i)}
										className={`h-2 w-8 rounded-full transition-all ${
											i === index
												? "bg-green-600"
												: "bg-gray-200"
										}`}
									/>
								))}
							</div>
						</motion.blockquote>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
