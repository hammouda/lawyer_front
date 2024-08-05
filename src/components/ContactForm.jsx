function ContactForm() {
    return(
        <div className="p-6">
                <p className="text-secondary text-4xl font-medium leading-relaxed">Free Consulation</p>
                <p className="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='mt-8'>
                  <form>
                    <div className="grid md:grid-cols-2 gap-5">
                        <input 
                            type="text" placeholder='Name'
                            className='bg-white border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                        />
                        <input 
                            type="email" placeholder='Email'
                            className='bg-white border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                        />
                        <input 
                            type="text" placeholder='Phone'
                            className='bg-white border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                        />
                        <select className='bg-white border border-primary-dark rounded-full w-full px-5 py-2 ' >
                            <option>Pick Case Area</option>
                            <option>Area 1</option>
                            <option>Area 1</option>
                            <option>Area 1</option>
                            <option>Area 1</option>
                        </select>
                    </div>
                    <textarea 
                        placeholder='Case Description' rows={4}
                        className='mt-5 bg-white border border-primary-dark rounded-3xl w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                    ></textarea>
                    <input type="submit" value="Send" className='mt-5 bg-white border border-primary-dark rounded-full px-8 py-2 cursor-pointer hover:bg-secondary hover:border-secondary hover:text-white' />
                  </form>
                </div>
            </div>
    );
}
export default ContactForm;