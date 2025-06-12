import { useEffect, useRef, useState } from "react";

const POSTPERPAGE = 10;

export default function UseApi() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef(null);

  async function fetchPosts(page) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts ");
    const result = await response.json();
    const newData = result.slice(0, page * POSTPERPAGE);
    setData(newData);
  }

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const target = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage(prev => prev + 1);
        }
      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    }
  }, [data])

  return (
    <main>
      <ul>
        {data.map((d, i) => (
          <li style={{ listStyle: "none", marginBottom: "40px" }} key={d.id}>
            <p style={{ fontSize: "20px" }}>{d.id}. {d.title}</p>
            <span>{d.body}</span>
            {i === data.length - 1 && <div ref={ref}>LAST</div>}
          </li>
        ))}
      </ul>
    </main>
  )
}