//import { TweetItem } from "@/components/tweet/tweet-item";
//import { GeneralHeader } from "@/components/ui/general-header";
//import { SearchInput } from "@/components/ui/search-input";
//import { tweet } from "@/data/tweet";
//import { redirect } from "next/navigation";
//
//export default function Page({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }) {
 // const query = Array.isArray(searchParams?.q) ? searchParams.q[0] : searchParams?.q;

  //if (!query) redirect("/");

 // return (
    //<div>
    //  <GeneralHeader backHref="/">
      //  <SearchInput defaultValue={query} />
      //</GeneralHeader>
      //<div className="border-t-2 border-gray-900">
       // <TweetItem tweet={tweet} />
        //<TweetItem tweet={tweet} />
        //<TweetItem tweet={tweet} />
        //<TweetItem tweet={tweet} />
      //</div>
  //  </div>
  //);
//}

export default function Page() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-semibold">Página em manutenção</h1>
      <p className="text-gray-600 mt-2">Esta página será atualizada em breve.</p>
    </div>
  );
}