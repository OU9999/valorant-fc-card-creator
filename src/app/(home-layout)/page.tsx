import ComboBox from "@/components/home/combo-box";
import RiotFist from "@/components/svg/riot-fist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const WelcomeSection = () => {
  return (
    <section className="w-full max-w-336 flex flex-col justify-center items-center space-y-3">
      <h1 className="text-6xl font-bold">
        Welcome to Valorant FC(FIFA) Card Creator
      </h1>
      <h2 className="text-lg text-slate-400">
        Welcome to Valorant FC(FIFA) Card Creator. Create your own personalized
        FIFA-style cards with ease. Experience the ultimate customization at
        your fingertips.
      </h2>
    </section>
  );
};

const InputSection = () => {
  return (
    <section className="w-full h-auto flex flex-col space-y-3">
      <ComboBox />
      <div className="w-full space-x-5 relative flex justify-center items-center overflow-hidden">
        <Separator className="w-1/3" />
        <p>or</p>
        <Separator className="w-1/3" />
      </div>

      <Button className="w-full text-slate-50 flex justify-center items-center space-x-2 bg-red-valorant hover:bg-red-700">
        <div className="w-4 h-4 relative fill-slate-50">
          <RiotFist />
        </div>
        <p>라이엇 로그인</p>
      </Button>
      <p className="w-full text-center text-sm text-slate-400">
        *By signing in you acknowledge that your profile becomes public. Make
        private.
      </p>
    </section>
  );
};

const CardSection = () => {
  return (
    <section className="flex justify-center items-center space-x-5">
      <div className="w-72 min-w-72 h-96 flex justify-center items-center rounded-md bg-red-valorant">
        card
      </div>
      <div className="w-72 min-w-72 h-96 flex justify-center items-center rounded-md bg-red-valorant">
        card
      </div>
    </section>
  );
};

const MainSection = () => {
  return (
    <section className="mt-14 flex w-full h-96 max-w-336 space-x-8">
      <div className="w-1/2">
        <InputSection />
      </div>
      <div className="w-1/2">
        <CardSection />
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="w-dvw h-auto min-h-dvh flex flex-col justify-center items-center">
      <WelcomeSection />
      <MainSection />
    </div>
  );
};

export default HomePage;
