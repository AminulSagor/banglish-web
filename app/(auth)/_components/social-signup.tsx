import Image from 'next/image';

type Props = {
  heading?: string;
};

const SocialSignUp = ({ heading }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <p className="text-[#7A3FAE] font-semibold">
        {heading || 'Or, Sign Up With'}
      </p>
      <div className="flex gap-4">
        <button className="border hover:bg-[#C99DFF]/30 border-[#C99DFF]/70 shadow-md rounded-md px-10 py-3.5 hover:cursor-pointer transition-all duration-300">
          <Image
            src="/logo/facebook.png"
            alt="Facebook"
            width={30}
            height={30}
          />
        </button>
        <button className="border hover:bg-[#C99DFF]/30 border-[#C99DFF]/70 shadow-md rounded-md px-10 py-3.5 hover:cursor-pointer transition-all duration-300">
          <Image src="/logo/google.png" alt="Google" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default SocialSignUp;
