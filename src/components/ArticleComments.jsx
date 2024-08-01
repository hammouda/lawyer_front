function ArticleComments() {
    return(
        <div className="w-[820px] h-[130px] p-3 bg-[#f2f7fc] rounded-[10px] flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-black text-base font-normal font-['Roboto'] leading-[18px]">User name</div>
            <div className="justify-start items-center gap-4 flex">
                <div className="text-black text-sm font-normal font-['Manrope'] leading-[18px]">2 mins</div>
                <img className="w-3.5 h-3.5" src="https://via.placeholder.com/14x14" />
            </div>
        </div>
        <div className="self-stretch text-[#191d23] text-base font-normal font-['Roboto'] leading-normal">Lorem ipsum dolor sit amet, coetur adipiscing elit ut aliquam, purus sit amet luctus Lorem ipsum dolor sit am et aliquam, purus sit amet luctus </div>
        <div className="self-stretch justify-end items-start gap-8 inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-[#4a6382] text-xs font-bold font-['Manrope'] leading-none tracking-tight">15 Likes</div>
            </div>
            <div className="justify-start items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
                <div className="text-[#4a6382] text-xs font-bold font-['Manrope'] leading-none tracking-tight">2 Replies</div>
            </div>
        </div>
    </div>
    );
}
export default ArticleComments;