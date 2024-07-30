function ArticleWriter() {
    return(
        <>
            <div className="100 h-[284.25px] bg-gradient-to-b from-black via-black to-black rounded-[20px]" >
                <img src="/images/articleWriter.png"/>
            </div>
            <div className="w-100 h-[55.50px] justify-between items-start inline-flex">
                <div className="relative">
                    <div className="left-10 top-0 absolute text-center text-black text-l font-normal font-['Roboto']">Mustapha Ahmed</div>
                    <div className="left-10 top-[50px] absolute text-center text-black text-base font-light font-['Roboto'] ">Lawyer</div>
                </div>
                <div className="w-7 h-[55.50px] relative">
                    <div className="w-7 h-7 left-0 top-0 absolute bg-white rounded-[20px] flex-col justify-start items-start inline-flex" ></div>
                    <div className="w-7 h-7 left-0 top-[27.50px] absolute bg-white rounded-[20px] flex-col justify-start items-start inline-flex" ></div>
                </div>
            </div>
        </>
    );
}
export default ArticleWriter;