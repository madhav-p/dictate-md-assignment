"use client"

import { Hit as AlgoliaHit } from 'instantsearch.js';
import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Configure, Highlight, Hits, InstantSearch, SearchBox, useStats } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch('0B0ENPP4DM', '55d88339136f5110f22271e618aa9eb6');

type HitProps = {
  hit: AlgoliaHit<{
    post_title: string;
    post_date: number;
    content: string;
  }>;
};
function Hit({ hit }: HitProps) {
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
    nbHits,
    processingTimeMS,
    query
  } = useStats();

  return query !== '' ? (<p className="my-6 ">
    <b>{nbHits} posts</b> were found in {processingTimeMS} ms.
  </p>) : null;
}
export default function SeachPage() {

  return (
    <main className="max-w-2xl p-8 m-auto">
      <h1 className="text-4xl font-bold my-8">Search</h1>
      <InstantSearch
        searchClient={{
          ...searchClient,
          search(requests) {
            if (requests.every(({ params }) => !params!.query)) {
              // Here we have to do something else
              return Promise.resolve({
                results: requests.map(() => ({
                  hits: [],
                  nbHits: 0,
                  nbPages: 0,
                  page: 0,
                  processingTimeMS: 0,
                  hitsPerPage: 0,
                  exhaustiveNbHits: false,
                  query: '',
                  params: '',
                })),
              });
            }
            return searchClient.search(requests);
          }
        }}
        indexName="posts"
      >
        <Configure
          analytics={false}
          distinct={true}
          hitsPerPage={5}
        />
        <SearchBox
          searchAsYouType={false}
          autoFocus={true}
          submitIconComponent={() => "Search"}
          resetIconComponent={() => null}
          classNames={{
            submit: "bg-blue-700 py-2 px-8 rounded-md text-white",
            input: "border-gray-800 rounded-sm p-2 border-2 w-[300px]",
            submitIcon: "text-white",
            form: "flex items-center justify-start gap-4 "
          }}
        />
        <CustomStats />
        <Hits
          hitComponent={Hit}
          classNames={{
            list: "flex flex-col divide-y-2",
            item: "border-gray-400"
          }}
        />
      </InstantSearch>
    </main>
  )
}