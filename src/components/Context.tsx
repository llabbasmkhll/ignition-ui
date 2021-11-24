import React from 'react';

export default function Context() {
    return (
        <section className="mt-20 2xl:row-span-4">
            <a id="context" className="z-50 absolute top-[-7.5rem] " />
            <div className="flex items-stretch">
                <nav className="hidden sm:block min-w-[8rem] flex-none mr-10 lg:mr-20">
                    <div className="sticky top-[7.5rem]">
                        <ul className="grid grid-cols-1 gap-10">
                            <li>
                                <h4 className="uppercase tracking-wider ~text-gray-500 text-xs font-bold">Request</h4>
                                <ul className="mt-3 grid grid-cols-1 gap-2">
                                    <li className="px-2 py-1 group text-base bg-indigo-500 text-white">
                                        <i className="mr-0.5 fa-fw fas fa-exchange-alt text-xs text-white/50" />
                                        Headers
                                    </li>
                                    <li className="px-2 py-1 group text-base hover:text-indigo-500">
                                        <i className="mr-0.5 fa-fw far fa-question-circle text-xs text-gray-400 group-hover:text-indigo-500" />
                                        Query String
                                    </li>
                                    <li className="px-2 py-1 group text-base hover:text-indigo-500">
                                        <i className="mr-0.5 fa-fw fas fa-code text-xs text-gray-400 group-hover:text-indigo-500" />
                                        Body
                                    </li>
                                    <li className="px-2 py-1 group text-base hover:text-indigo-500">
                                        <i className="mr-0.5 fa-fw far fa-file text-xs text-gray-400 group-hover:text-indigo-500" />
                                        Files
                                    </li>
                                    <li className="px-2 py-1 group text-base hover:text-indigo-500">
                                        <i className="mr-0.5 fa-fw fas fa-hourglass-half text-xs text-gray-400 group-hover:text-indigo-500" />
                                        Session
                                    </li>
                                    <li className="px-2 py-1 group text-base hover:text-indigo-500">
                                        <i className="mr-0.5 fa-fw fas fa-cookie-bite text-xs text-gray-400 group-hover:text-indigo-500" />
                                        Cookies
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h4 className="uppercase tracking-wider ~text-gray-500 text-xs font-bold">App</h4>
                                <ul className="mt-3 grid grid-cols-1 gap-2">
                                    <li className="px-2 py-1 group text-base hover:text-indigo-500">
                                        <i className="mr-0.5 fa-fw fas fa-random text-xs text-gray-400 group-hover:text-indigo-500" />
                                        Routing
                                    </li>
                                    <li className="px-2 py-1 group text-base hover:text-indigo-500">
                                        <i className="mr-0.5 fa-fw fas fa-paint-roller text-xs text-gray-400 group-hover:text-indigo-500" />
                                        Views
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h4 className="uppercase tracking-wider ~text-gray-500 text-xs font-bold">User</h4>
                                <ul className="mt-3 grid grid-cols-1 gap-2">
                                    <li className="px-2 py-1 group text-base hover:text-indigo-500">
                                        <i className="mr-0.5 fa-fw fas fa-user text-xs text-gray-400 group-hover:text-indigo-500" />
                                        User
                                    </li>
                                    <li className="px-2 py-1 group text-base hover:text-indigo-500">
                                        <i className="mr-0.5 fa-fw far fa-window-maximize text-xs text-gray-400 group-hover:text-indigo-500" />
                                        (Client)
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="overflow-hidden grid grid-cols-1 gap-px">
                    <section className="shadow-lg
              ~bg-white px-6 sm:px-10 pt-8 pb-20 min-w-0 overflow-hidden">
                        <dl className="grid grid-cols-[8rem,minmax(0,1fr)] gap-x-10 gap-y-2">
                            <h2 className="mb-6 col-span-2 font-bold leading-snug text-xl ~text-indigo-600 uppercase tracking-wider">
                                Request</h2>
                            <div className="py-2 col-span-2 text-lg font-semibold flex items-center">
                                <span>https://medialibrary.pro/demo-customized-collection</span>
                                <span className="ml-2 px-1.5 rounded-sm  border border-indigo-500/20 ~text-indigo-600 text-xs uppercase tracking-wider">
                                    GET
                                </span>
                            </div>
                            <div className="col-span-2 group ~bg-gray-500/5">
                                <div className="max-h-32 overflow-hidden mask-fade-y">
                                    <div className="px-4 py-2 mask-fade-x">
                                        <code className="font-mono leading-relaxed text-sm font-normal">
                                            <pre>curl "https://medialibrary.pro/demo-customized-collection" \{"\n"}{"    "}-X POST \{"\n"}{"    "}-H 'cookie: XSRF-TOKEN=eyJpdiI6IjM1cTRDMzlBUmx2OUw4UXd1MUtoaGc9PSIsInZhbHVlIjoiSGhPejVGTnlTbEY0UFlJYThHUHBKOERoVmU4MDFpUVV4aWdsOW16SnFvUEVvMmZXdlpMci9Sc3hTeDJkSldnTW9xc2IwSWEvWnJLeVpsQWNzVTBROG1rQXkzaExQaU5XWWROeWZYcHJBZkFFM092SXZOd0c0NzZYdEFoUXNZUUYiLCJtYWMiOiIxNzU0ZjViMDljMmEzZTM1YjljYWY2NDk5ZjcwM2UyNzI0MWZkYThkNmZiMmZkNmVlZDZmZmMyNGQ2YWJlYzY2In0%3D; medialibrarypro_session=eyJpdiI6IjlkVUNHQlVQZHc4cUVxa05SN200dEE9PSIsInZhbHVlIjoibXZaMzdjVzk4OXcvQjZTL2V1dVRJbHZuU3p5VmFYbFBUTWVoSVRtYnZ6bDRVS1lmd2QwenVLTERreGh6d2FZZDdmTnl5MU1nR3d3cnNMLzBiL0FtRXVHQ2NYTkdabVB0bXNoc2F4dkZOcUpjRkFUWUZKTDV4ckwwZ04wZmQwTHoiLCJtYWMiOiI0MjA1NzEzOWFjMDhlMWE3MTgwZDdmMmRiYmEzOTQ3MGEwODQ3OWIxYjYyMjRmYTdmOTNmOGU3ZGI5ODY0M2I1In0%3D' \{"\n"}{"    "}-H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8,bn;q=0.7,fr;q=0.6' \{"\n"}{"    "}-H 'accept-encoding: gzip, deflate, br' \{"\n"}{"    "}-H 'referer: https://medialibrary.pro/demo-customized-collection' \{"\n"}{"    "}-H 'sec-fetch-dest: document' \{"\n"}{"    "}-H 'sec-fetch-user: ?1' \{"\n"}{"    "}-H 'sec-fetch-mode: navigate' \{"\n"}{"    "}-H 'sec-fetch-site: same-origin' \{"\n"}{"    "}-H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \{"\n"}{"    "}-H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36' \{"\n"}{"    "}-H 'content-type: application/x-www-form-urlencoded' \{"\n"}{"    "}-H 'origin: https://medialibrary.pro' \{"\n"}{"    "}-H 'upgrade-insecure-requests: 1' \{"\n"}{"    "}-H 'sec-ch-ua-platform: "Windows"' \{"\n"}{"    "}-H 'sec-ch-ua-mobile: ?0' \{"\n"}{"    "}-H 'sec-ch-ua: "Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"' \{"\n"}{"    "}-H 'cache-control: max-age=0' \{"\n"}{"    "}-H 'content-length: 1394' \{"\n"}{"    "}-H 'host: medialibrary.pro' \{"\n"}{"    "}-F '_token=7uzRjLOwiqLEgOvXpKKDXyl70FHlHtblkjY0vkDk' -F 'downloads=[object Object]'</pre>
                                        </code>
                                    </div>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                                <button className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 shadow-md ~bg-white ~text-gray-500 hover:text-indigo-500 group-hover:opacity-100 w-6 h-6 rounded-full flex items-center justify-center text-xs ">
                                    <i className="fas fa-angle-down" />
                                </button>
                            </div>
                            <hr className="my-2 col-span-2 border-t ~border-gray-200" />
                            <h1 className="py-2 col-span-2 font-semibold text-lg ~text-indigo-600">
                                Headers
                                <i className="ml-2 fa-fw fas fa-exchange-alt text-sm opacity-50" />
                            </h1>
                            <dt className="py-2 truncate">accept-encoding</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>"gzip, deflate, br"</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                            <dt className="py-2 truncate">accept-language</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>"en-US,en;q=0.9"</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                            <dt className="py-2 truncate">…</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>"en-US,en;q=0.9"</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                            <hr className="my-2 col-span-2 border-t ~border-gray-200" />
                            <h1 className="py-2 col-span-2 font-semibold text-lg ~text-indigo-600">
                                Query String
                                <i className="ml-2 fa-fw far fa-question-circle text-xs opacity-50" />
                            </h1>
                        </dl>
                    </section>
                    <section className="shadow-lg
              ~bg-white px-6 sm:px-10 pt-8 pb-20 min-w-0 overflow-hidden">
                        <dl className="grid grid-cols-[8rem,minmax(0,1fr)] gap-x-10 gap-y-2">
                            <h2 className="mb-6 col-span-2 font-bold leading-snug text-xl ~text-indigo-600 uppercase tracking-wider">
                                App
                            </h2>
                            <div className="py-2 col-span-2 text-lg font-semibold ~text-indigo-600">
                                Route
                                <i className="ml-2 fa-fw fas fa-random text-sm  opacity-50" />
                            </div>
                            <dt className="py-2 truncate">Controller</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>App\Http\Front\Controllers\Demo\CustomizedCollectionDemoController@store</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                            <dt className="py-2 truncate">Route Name</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>generated::52qYIIGYk3DCS9Av</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                            <hr className="my-2 col-span-2 border-t ~border-gray-200" />
                            <h1 className="py-2 col-span-2 font-semibold text-lg ~text-indigo-600">
                                Views
                                <i className="ml-2 fa-fw fas fa-paint-roller text-sm opacity-50" />
                            </h1>
                            <dt className="py-2 truncate">Name</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>…</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                            <dt className="py-2 truncate">Data</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>…</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                        </dl>
                    </section>
                    <section className="shadow-lg
              ~bg-white px-6 sm:px-10 pt-8 pb-20 min-w-0 overflow-hidden">
                        <dl className="grid grid-cols-[8rem,minmax(0,1fr)] gap-x-10 gap-y-2">
                            <h2 className="mb-6 col-span-2 font-bold leading-snug text-xl ~text-indigo-600 uppercase tracking-wider">
                                User
                            </h2>
                            <div className="py-2 col-span-2 text-lg font-semibold flex items-center">
                                <div className="flex-none w-8 h-8 rounded-full overflow-hidden mr-2">
                                    <img alt="alex@spatie.be" src="https://gravatar.com/avatar/c46a1f02a0fa51179c5bee5e42c587e1?s=240" />
                                </div>
                                alex@spatie.be
                            </div>
                            <dt className="py-2 truncate">User Data</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>…</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                            <hr className="my-2 col-span-2 border-t ~border-gray-200" />
                            <h1 className="py-2 col-span-2 font-semibold text-lg">
                                …
                            </h1>
                            <dt className="py-2 truncate">This is a very long label</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>…</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                            <dt className="py-2 truncate">Data</dt>
                            <dd className="group overflow-hidden ~bg-gray-500/5">
                                <div className="px-4 py-2 mask-fade-x">
                                    <code className="font-mono leading-relaxed text-sm font-normal">
                                        <pre>…</pre>
                                    </code>
                                </div>
                                <button className="absolute top-2 right-2 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    <i className="far fa-copy" />
                                </button>
                            </dd>
                        </dl>
                    </section>
                </div>
            </div>
        </section>
    )
}