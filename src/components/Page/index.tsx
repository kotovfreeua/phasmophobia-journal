interface Props {
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({ children }) => (
  <section className='relative bg-[#fefcdb] text-stone-900 max-w-md sm:max-w-lg w-full h-[80vh] px-4 md:px-10 py-12 rounded-[2px_3px] page-bg before:block paper'>
    {children}
  </section>
);

export default Page;
