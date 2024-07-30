function ArticleCard(){
    return(
        <div className="w-[450px] h-[518px] p-4 bg-[#bf9845]/50 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
    <img className="self-stretch h-[300px] rounded-[20px]" src="https://via.placeholder.com/418x300" />
    <div className="w-[418px] justify-between items-start inline-flex">
        <div className="h-[35px] px-2.5 py-[5px] bg-[#4a6382]/60 rounded-[10px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-base font-bold font-['Roboto'] leading-[25px]">15.07.2024</div>
        </div>
        <div className="px-2.5 py-[5px] rounded-[10px] justify-center items-center gap-2.5 flex">
            <div className="text-[#2e2e2e] text-base font-bold font-['Roboto'] leading-[25px]">Written by MR. Mahmoud Ahmed</div>
        </div>
    </div>
    <div className="text-black text-xl font-normal font-['Roboto']">Step-by-Step Guide:<br/>Legal Process in Resolving Business Disputes</div>
    <div className="self-stretch text-black text-base font-light font-['Roboto'] leading-[25px] tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</div>
</div>
    );
}
export default ArticleCard