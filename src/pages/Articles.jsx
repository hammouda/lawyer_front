import Menu from "../components/menu";


function Articles() {
    return(
        <>
            <Menu/>
            <div className="w-100 text-black text-[40px] font-bold font-['Roboto']">Mithaq Al Tashrie: Article collection</div>
            <div className="w-100 grid grid-cols-4 gap-1">
                <div className="grid-span-3">
                    <div className=" h-[42px] bg-white rounded-[20px] border border-[#4a6382]" />
                </div>
                <div className="grid-span-1">
                    <div className=" h-[42px] bg-white rounded-[20px] border border-[#4a6382]" />
                </div>
            </div>
        </>
    );
}
export default Articles