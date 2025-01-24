import { useState, type ComponentProps } from "react";
import type { ContactFormProps } from "./ContactForm";
import ContactForm from "./ContactForm";
import { AnimatePresence, motion } from "motion/react";
import { ContactCheckmark } from "./ContactCheckmark";
import whatsappImage from "@/assets/images/whatsapp.png";
import telegramImage from "@/assets/images/telegram.png";

interface AnimatedContactUsProps {
  heading: string;
  formTranslations: ContactFormProps;
}

export function AnimatedContactUs({
  heading,
  formTranslations,
}: AnimatedContactUsProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <div className="rounded-smooth-large bg-primary px-9 py-14 md:px-24">
        <AnimatePresence>
          {!formSubmitted && (
            <motion.div
              className="mb-5"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2.3,
                delay: 1,
              }}
            >
              <div className="mb-8 flex gap-10">
                <a href="#" className="flex items-center gap-2 font-semibold">
                  <img src={whatsappImage.src} alt="Telegram" className="w-8" />
                  WhatsApp
                </a>
                <a href="#" className="flex items-center gap-2 font-semibold">
                  <img src={telegramImage.src} alt="Telegram" className="w-8" />
                  Telegram
                </a>
              </div>
              <p className="text-lg">{heading}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex gap-2">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <ContactForm
                key="contact-form"
                {...formTranslations}
                onSuccess={() => setFormSubmitted(true)}
              />
            ) : (
              <motion.div
                key="success-message"
                className="grid w-full place-items-center gap-10 py-28"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
              >
                <ContactCheckmark />
                <div className="grid max-w-xl gap-4 text-center">
                  <h3 className="text-3xl font-semibold">
                    Thank you for contacting us!
                  </h3>
                  <p>
                    We've received your request and will call you back within 48
                    hours.
                  </p>
                  <p>
                    If you're unable to pick up or you've changed your mind,
                    please email us at callback@website.com
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!formSubmitted && (
              <motion.div
                className="hidden lg:block"
                initial={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: 700, y: -400, opacity: 0 }}
                transition={{
                  duration: 1.3,
                  ease: "backIn",
                  delay: 2,
                  opacity: { delay: 3 },
                }}
              >
                <PlaneSvg animate={!formSubmitted} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

interface PlaneSvgProps extends ComponentProps<"svg"> {
  animate?: boolean;
}

const PlaneSvg = ({ animate, ...props }: PlaneSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={529}
    height={625}
    fill="none"
    {...props}
  >
    <motion.path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={14}
      d="M264.497 203.5c-37 15.167-107.096 64.5-83.496 162.5 23.599 98 82.995 118.542 110.995 113 11.381-2.252 24.485-8.394 26-20.5 2.145-17.139-9.05-31.068-26-37-22.555-7.894-49.2-1.7-64 21.5-18.5 29-16.387 49.704-4.996 71 11.5 21.5 61.5 42.5 61.5 42.5s30 13.5 47.496 19"
      initial={{ pathLength: 1, opacity: 1 }}
      exit={{ pathLength: 0, opacity: 0 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        opacity: {
          delay: 1.3, // Add a 1-second delay for the opacity transition
          duration: 1, // Duration for the opacity transition
        },
      }}
    />
    <motion.g
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2,
      }}
    >
      <path
        fill="#fff"
        d="M98.08 460.014c-.022 39.169-14.54 57.691-42.074 65.701 0 0 42.05 16.248 54.057 57.556 0 0 4.61-51.548 41.558-66.067-29.536-4.004-47.808-24.529-53.542-57.191l.002.001Z"
      />
      <path
        fill="#000"
        d="M110.058 590.282a7.01 7.01 0 0 1-6.728-5.056c-10.857-37.348-49.476-52.824-49.864-52.976a7.02 7.02 0 0 1-4.459-6.847 7.008 7.008 0 0 1 5.04-6.422c25.928-7.543 37-25.18 37.02-58.973a7.013 7.013 0 0 1 13.92-1.208c3.691 21.031 14.942 47.03 47.577 51.455a7.012 7.012 0 0 1 1.622 13.475c-32.539 12.785-37.096 59.691-37.138 60.164a7.013 7.013 0 0 1-6.99 6.388Zm-37.254-63.765c10.567 6.481 24.806 17.52 34.933 34.222 4.144-13.244 11.814-29.681 25.82-41.015-13.842-5.527-24.784-15.35-32.343-28.958-4.813 16.42-14.168 28.159-28.41 35.75v.001Z"
      />
    </motion.g>
    <motion.g
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2,
      }}
    >
      <path
        fill="#fff"
        d="M422.422 270.012c-1.353 28.418-9.472 48.716-28.418 54.129 0 0 30.705 14.113 37.89 43.304 0 0 5.414-39.244 28.418-48.716-20.059-6.915-31.499-24.649-37.89-48.717Z"
      />
      <path
        fill="#000"
        d="M431.892 374.452a7.01 7.01 0 0 1-6.806-5.332c-6.264-25.449-33.747-38.485-34.023-38.615a7.017 7.017 0 0 1 1.015-13.106c14.173-4.049 22.026-20.105 23.341-47.721a7.011 7.011 0 0 1 13.782-1.465c6.367 23.978 17.291 38.334 33.398 43.887a7.011 7.011 0 0 1 .385 13.113c-15.745 6.483-22.766 33.381-24.143 43.199a7.013 7.013 0 0 1-6.949 6.04Zm-23.39-49.802c6.723 4.724 15.113 11.921 21.603 21.731 3.249-9.027 8.348-19.272 16.147-26.643-8.365-5.276-15.265-12.807-20.779-22.694-3.487 12.443-9.155 21.665-16.971 27.606Z"
      />
    </motion.g>
    {/* Plane */}
    <motion.g
      clipPath="url(#a)"
      initial={{ rotate: 0 }}
      animate={{ rotate: animate ? [0, 4, -4, 0] : 0 }}
      transition={{
        repeat: Infinity,
        duration: 1.3,
        ease: "easeInOut",
        delay: 1,
        repeatDelay: 5,
      }}
    >
      <g clipPath="url(#b)">
        <path
          fill="#000"
          d="M353.68 167.422c8.431 3.826 130.739-60.419 130.739-60.419l-114.793 28.805-15.946 31.614Z"
        />
        <path
          fill="#000"
          d="M353.991 170.732a4.757 4.757 0 0 1-1.616-.417 3.169 3.169 0 0 1-1.851-3.098c.028-.428.142-.846.335-1.228l15.946-31.613a3.169 3.169 0 0 1 2.056-1.648l114.792-28.805a3.15 3.15 0 0 1 2.23.265 3.185 3.185 0 0 1 1.491 3.941 3.175 3.175 0 0 1-1.493 1.686c-.306.161-30.975 16.259-62.28 31.682-18.411 9.07-33.446 16.14-44.686 21.012-16.458 7.135-22.202 8.463-24.924 8.223Zm17.801-32.196-12.551 24.883c6.941-2.178 23.571-8.852 63.343-28.491 12.965-6.402 25.729-12.87 36.157-18.21l-86.948 21.818h-.001Z"
        />
        <path
          fill="#fff"
          d="M353.679 167.421c-3.415-6.025 4.402-29.991 3.086-34.95-1.315-4.96-25.739-27.17-21.988-29.921 3.751-2.75 175.538-25.644 182.075-20.224 6.536 5.42-92.391 105.697-99.583 107.014-3.377.619-44.444-55.011-47.644-53.532-3.199 1.479-15.946 31.614-15.946 31.614v-.001Z"
        />
        <path
          fill="#000"
          d="M409.715 182.234c-2.846-.251-6.794-4.546-21.754-22.36-6.068-7.224-14.067-16.749-17.66-20.032-2.835 4.454-8.907 17.462-13.711 28.818a3.18 3.18 0 0 1-1.09 1.356 3.15 3.15 0 0 1-3.33.195 3.167 3.167 0 0 1-1.239-1.218c-2.4-4.237-1.115-12.19 1.12-23.84.819-4.271 1.933-10.073 1.686-11.725-1.3-2.149-10.099-9.356-16.555-14.643-16.639-13.629-21.131-17.819-21.036-21.329a3.785 3.785 0 0 1 1.547-2.976c.926-.679 2.078-1.524 33.023-4.816 18.869-2.007 42.992-4.27 66.184-6.207 18.489-1.545 45.077-3.61 66.742-4.676 32.003-1.575 33.865-.03 35.225 1.097 1.164.966 1.65 2.455 1.331 4.087-.452 2.312-1.653 8.456-54.145 53.531-11.731 10.073-24.903 21.09-36.139 30.225-16.902 13.742-18.065 14.108-18.76 14.326-.481.152-.943.231-1.439.187Zm-39.585-49.657c2.161.191 4.657 2.506 9.259 7.579 3.838 4.23 8.702 10.022 13.407 15.623 6.028 7.178 14.043 16.722 17.271 19.554 5.765-4.203 28.579-22.63 52.582-43.265 36.868-31.696 47.291-43.316 50.229-47.414-8.436-.717-36.976.241-95.64 5.145-43.34 3.623-81.403 7.64-92.996 9.451 3.599 3.686 11.385 10.064 16.94 14.613 12.907 10.573 17.859 14.845 18.64 17.788.696 2.625-.098 7.069-1.561 14.698a393.153 393.153 0 0 0-.949 5.073l.276-.594c7.664-16.493 9.429-17.308 10.718-17.904.609-.281 1.203-.401 1.824-.346v-.001Z"
        />
        <path
          fill="#000"
          d="M381.569 128.648a3.152 3.152 0 0 1-2.662-1.989 3.189 3.189 0 0 1 .735-3.449c.298-.291.65-.52 1.036-.674 32.946-13.175 81.016-28.543 135.353-43.275a3.147 3.147 0 0 1 3.337 1.122 3.195 3.195 0 0 1 .233 3.527 3.161 3.161 0 0 1-1.926 1.48c-54.11 14.671-101.934 29.957-134.662 43.043a3.13 3.13 0 0 1-1.445.215h.001Z"
        />
      </g>
      <g clipPath="url(#c)">
        <path
          fill="#000"
          d="M274.309 153.505a3.181 3.181 0 0 1-2.797-2.354 3.157 3.157 0 0 1 1.285-3.413c5.577-3.78 39.695-19.29 46.478-22.361a3.188 3.188 0 0 1 4.208 1.572 3.158 3.158 0 0 1-1.575 4.189c-13.879 6.282-41.255 18.931-45.534 21.832-.606.411-1.335.6-2.065.535Zm41.548 13.416a3.187 3.187 0 0 1-1.916-.862 3.156 3.156 0 0 1 1.077-5.254c5.153-1.922 17.034-7.324 21.144-11.099a3.185 3.185 0 0 1 4.489.183 3.159 3.159 0 0 1-.181 4.471c-5.647 5.186-19.753 11.078-23.221 12.371-.444.166-.92.231-1.392.189v.001Zm15.436 44.71a3.186 3.186 0 0 1-1.92-.87 3.156 3.156 0 0 1 1.114-5.258c9.807-3.533 19.778-9.227 29.422-14.733 9.58-5.471 18.629-10.638 27.72-13.996a3.185 3.185 0 0 1 4.101 1.861 3.17 3.17 0 0 1-.094 2.428 3.174 3.174 0 0 1-1.795 1.644c-8.597 3.176-17.425 8.216-26.77 13.553-9.879 5.64-20.094 11.474-30.42 15.193a3.188 3.188 0 0 1-1.359.177l.001.001Z"
        />
      </g>
    </motion.g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          d="M275.955 41 528.97 63.345l-15.954 180.653L260 221.653z"
        />
      </clipPath>
      <clipPath id="b">
        <path
          fill="#fff"
          d="m319.338 61.223 201.327 17.78-10.47 118.556-201.327-17.78z"
        />
      </clipPath>
      <clipPath id="c">
        <path
          fill="#fff"
          d="m273.992 120.966 122.17 10.79-7.501 84.94-122.17-10.79z"
        />
      </clipPath>
    </defs>
  </svg>
);
