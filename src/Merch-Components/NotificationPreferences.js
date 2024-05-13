const NotificationPreferences = () => {
    return (
        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start py-4 px-6 gap-[28px] text-left text-xl text-black font-poppins">
            <b className="h-[30px] relative inline-block text-darkslateblue-300 mq450:text-base">
                Notification Preferences
            </b>
            <div className="flex flex-row items-center justify-start gap-[21px]">
                <div className="relative font-medium mq450:text-base">
                    Route Updates:
                </div>
                <div className="h-6 w-11 rounded-xl bg-darkslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-end py-0.5 pr-0.5 pl-[22px] box-border">
                    <img
                        className="h-5 w-5 relative rounded-980xl overflow-hidden shrink-0"
                        alt=""
                        src="/baseswitch-icon.svg"
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[21px]">
                <div className="relative font-medium mq450:text-base">
                    Product Insights
                </div>
                <div className="h-6 w-11 rounded-xl bg-darkslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-end py-0.5 pr-0.5 pl-[22px] box-border">
                    <img
                        className="h-5 w-5 relative rounded-980xl overflow-hidden shrink-0"
                        alt=""
                        src="/baseswitch-icon.svg"
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[21px]">
                <div className="h-[30px] relative font-medium inline-block mq450:text-base">
                    Sales orders
                </div>
                <div className="h-6 w-11 rounded-xl bg-darkslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-end py-0.5 pr-0.5 pl-[22px] box-border">
                    <img
                        className="h-5 w-5 relative rounded-980xl overflow-hidden shrink-0"
                        alt=""
                        src="/baseswitch-icon.svg"
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[21px]">
                <div className="relative font-medium mq450:text-base">
                    Competitor Activities
                </div>
                <div className="h-6 w-11 rounded-xl bg-darkslateblue-300 overflow-hidden shrink-0 flex flex-row items-center justify-end py-0.5 pr-0.5 pl-[22px] box-border">
                    <img
                        className="h-5 w-5 relative rounded-980xl overflow-hidden shrink-0"
                        alt=""
                        src="/baseswitch-icon.svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default NotificationPreferences;
