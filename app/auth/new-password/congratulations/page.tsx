import { BaggageClaim } from "lucide-react";
import Link from "next/link";

import { GradientButton } from "@/components/custom-button";
import Image from "next/image";

const CongratulationsPage = () => {
  return (
    <div className="bg-[#F1ECF9] min-h-screen flex flex-col items-center justify-center">
      <div className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="space-y-8">
              {/* Icon */}
              <div className="flex items-center justify-center">
                <BaggageClaim size={100} className="text-purple-400" />
              </div>

              {/* Heading */}

              <div className="bg-white p-8 border border-[#C99DFF] rounded-2xl max-w-xl min-w-xl shadow-md">
                <div className="space-y-4">
                  <div className="flex justify-center items-center">
                    <Image
                      alt="verified "
                      src={"/verified.png"}
                      width={120}
                      height={120}
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-[36px] font-bold text-center text-[#7A3FAE]">
                    All Set!
                  </h2>
                  <p className="text-[26px] font-normal  text-center text-[#7A3FAE]">
                    Your password has been reset
                  </p>

                  <Link href="/">
                    <GradientButton type="submit" className="w-full py-4">
                      Go to Rooms
                    </GradientButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsPage;
