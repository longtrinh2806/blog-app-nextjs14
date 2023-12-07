'use client'
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import useSWR, { Fetcher } from 'swr';

function ViewDetailBlog({ params }: { params: { blogId: string } }) {

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.blogId}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (

        <div className='my-4'>
            <div className='my-4'>
                <Link href={"/blog"}>
                    Go Back
                </Link>
            </div>
            <Card className='text-center'>
                <Card.Header>Title: {data?.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {data?.content}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className='text-muted'>
                    Author: {data?.author}
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ViewDetailBlog;