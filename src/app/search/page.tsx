"use client"

import { useState } from "react"

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Configure, Highlight, Hits, InstantSearch, SearchBox, Stats, useStats } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch('0B0ENPP4DM', '55d88339136f5110f22271e618aa9eb6');

function Hit({ hit }) {
  const date = new Date(hit.post_date);
  return (

    <article className="my-4">
      <h2 className="text-xl font-semibold"><Highlight attribute="post_title" hit={hit} /></h2>
      <p><small className="italic">{date.toDateString()}</small></p>
      <p className="line-clamp-3 overflow-hidden text-ellipsis">
        <Highlight attribute="content" hit={hit} />
      </p>
    </article>

  );
}
function CustomStats() {
  const {
    hitsPerPage,
    nbHits,
    areHitsSorted,
    nbSortedHits,
    nbPages,
    page,
    processingTimeMS,
    query,
  } = useStats();

  return <p className="my-6 ">
    <b>{nbHits} posts</b> were found in {processingTimeMS} ms.
  </p>;
}
export default function SeachPage() {

  return (
    <main className="max-w-2xl p-8 m-auto">
      <h1 className="text-4xl font-bold my-8">Search</h1>
      <InstantSearch searchClient={searchClient} indexName="posts" >
        <Configure
          analytics={false}
          // filters="free_shipping:true"
          distinct={true}
          hitsPerPage={5}
        />

        <SearchBox
          // Optional props
          // placeholder={string}
          // queryHook={function}
          searchAsYouType={false}
          autoFocus={true}
          // onSubmit={function}
          submitIconComponent={() => "Search"}
          resetIconComponent={() => null}
          // loadingIconComponent={() => JSX.Element}
          classNames={{
            submit: "bg-blue-700 py-2 px-8 rounded-md text-white",
            input: "border-gray-800 rounded-sm p-2 border-2 w-[300px]",
            submitIcon: "text-white",
            form: "flex items-center justify-start gap-4 "
          }}
        // translations={object}
        // ...props={ComponentProps<'div'>}
        />
        <CustomStats />

        <Hits
          // Optional props
          hitComponent={Hit}
          classNames={{
            list: "flex flex-col divide-y-2",
            item: "border-gray-400"
          }}
        // ...props={ComponentProps<'div'>}
        />
      </InstantSearch>
      {/* <form className="flex items-center justify-start gap-4 ">
        <input type="search" name="query" id="" style={{
          width: "300px"
        }} className="border-gray-800 rounded-sm p-2 border-2 " />
        <button name="action" className="bg-blue-700 py-2 px-8 rounded-md text-white"
          value="search">Search</button>
      </form> */}
      {/* <ul className=" flex flex-col divide-y-2 ">
        {searchHits.map((e, i) => (<li key={i} className="border-gray-400">
          <article className="my-2 ">
            <h2 className="text-xl font-semibold">Title</h2>
            <p><small className="italic">Oct 09, 2018</small></p>
            <p className="line-clamp-3 overflow-hidden text-ellipsis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, at veritatis? Molestias numquam quia commodi odio. At laudantium repellendus labore molestiae ipsum. Minima eos nesciunt quisquam praesentium consectetur, ad sapiente!
            </p>
          </article>
        </li>))}
      </ul> */}
    </main>

  )
}