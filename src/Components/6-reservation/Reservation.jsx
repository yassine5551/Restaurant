import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

function Reservation() {
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "be534fa8-bf51-42a7-ba80-a9481926c788";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  return (
    <>
      <section className="bg-gray-100 mt-10">
        <h1 className="font-italian tracking-widest text-3xl uppercase italic font-Courgette text-red-600 pt-10 flex justify-center justify-items-center">
          Reservation
        </h1>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  0151 475 4450{" "}
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      {...register("email", { required: true })}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      {...register("tel", { required: true })}
                    />
                  </div>
                  <div>
                    <label className="sr-only relative" htmlFor="visitors">
                      Number Of People :
                      <FontAwesomeIcon
                        icon={faPerson}
                        className="absolute w-10 p-8 text-2xl"
                      />
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm  "
                      placeholder="How Many People For a Table"
                      type="text"
                      min="1"
                      defaultValue={1}
                      max={2}
                      id="visitors"
                      {...register("number of people", { required: true })}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    {...register("message", { required: true })}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>

              <span className="text-xl ">{result}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Reservation;
