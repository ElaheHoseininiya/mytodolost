import Filters from './../components/filters';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px-1fr-20px] items-center justify-items-center">
        <div className="container mx-auto">
          <Filters/>
        </div>
    </div>
  );
}
