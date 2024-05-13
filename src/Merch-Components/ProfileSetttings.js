import FrameComponent from "./FrameComponent";

const ProfileSettings = () => {
    return (
        <form className="m-0 self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start py-[25px] px-[50px] box-border gap-[28px] max-w-full mq900:pt-5 mq900:pb-5 mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <b className="relative text-xl leading-[87.52%] font-inter text-darkslateblue-300 text-left mq450:text-base mq450:leading-[14px]">
                Profile settings
            </b>
            <div className="w-[150px] h-[150px] rounded-56xl flex flex-row items-start justify-end pt-[114px] px-[6.3px] pb-3 box-border bg-[url('/public/39@2x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                    className="h-[150px] w-[150px] relative rounded-56xl object-cover hidden"
                    alt=""
                    src="/39@2x.png"
                />
                <img
                    className="h-6 w-[26.7px] relative z-[1]"
                    alt=""
                    src="/vector-1.svg"
                />
            </div>
            <FrameComponent email="email" emailPlaceholder="email" />
            <FrameComponent
                email="Phone"
                emailPlaceholder="Phone number"
                propWidth="98px"
                propColor="#544c4c"
            />
            <FrameComponent
                email="Password"
                emailPlaceholder="************"
                propWidth="88px"
                propColor="#000"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                <b className="relative text-base leading-[87.52%] font-inter text-black text-left">
                    Confrim password
                </b>
                <div className="self-stretch rounded-md box-border flex flex-row items-start justify-start py-3.5 px-[15px] max-w-full border-[1px] border-solid border-dimgray-200">
                    <div className="h-11 w-[342px] relative rounded-md box-border hidden max-w-full border-[1px] border-solid border-dimgray-200" />
                    <div className="relative text-sm leading-[87.52%] font-medium font-inter text-black text-left z-[1]">
                        ************
                    </div>
                </div>
            </div>
            <button className="cursor-pointer [border:none] pt-3.5 pb-[13px] pr-[43px] pl-11 bg-darkslateblue-400 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslateblue-100">
                <div className="h-[45px] w-[221px] relative rounded-md bg-darkslateblue-400 hidden" />
                <div className="relative text-xl leading-[87.52%] font-medium font-inter text-white text-left z-[1]">
                    Save changes
                </div>
            </button>
        </form>
    );
};

export default ProfileSettings;
