'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import BlogCard from "../../../components/BlogCard"

const AllArticlePage = () => {
    const [articleData, setArticleData] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
        throw new Error('API key is missing.');
    }
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/admin/get/all/content`, {
                    method: 'GET', headers: { 'x-api-key': apiKey }
                });
                const data = await response.json();
                console.log(data)
                console.log(data?.allArticle)
                setArticleData(data?.allArticle);
                setLoading(false);

            } catch (error) {
                console.error('Error fetching Article data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="p-10 pt-40 w-full">
            {!loading ? (articleData?.length > 0 ? (<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
                {articleData?.map((data, index) => (
                    <Link href={`/allArticles/${data?.id}`} key={index} className="w-full">
                        <BlogCard
                            heading={data?.heading}
                            para={data?.content}
                            image={data?.articleImagePath[0]}
                        />
                    </Link>
                ))}
            </div>) : (<div className='flex items-center justify-center h-screen'>
                <p>No Data Found</p>
            </div>)) : (<div className='flex items-center justify-center h-screen'>
                <p>loading...</p>
            </div>)}
        </div>
    )
}

export default AllArticlePage;
