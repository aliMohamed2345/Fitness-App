import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { testimonials } from "@/app/utils/data";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-3 text-foreground border-border">
          <FaHeart className="w-3 h-3 mr-1" />
          Testimonials
        </div>
        <h2 className="text-athletic-heading text-2xl">Loved by Athletes</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <div className="h-full rounded-xl border border-border bg-card text-card-foreground shadow-card transition-all duration-300 hover:border-primary/30">
              <div className="p-6 pt-0">
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-secondary">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-bold text-sm">{testimonial.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
