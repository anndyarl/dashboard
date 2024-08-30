import Layout from "hocs/layout/Layout";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"
import { get_blog  } from "redux/actions/blog/blog";

import { Helmet } from 'react-helmet-async';
import BlogList from "components/blog/BlogList";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import axios from 'axios';


function EditPost({  
    post,    
    get_blog
}) {

    const params = useParams()
    const slug = params.slug

    useEffect(() => {
        window.scrollTo(0,0)
        get_blog(slug);   
    }, []);

    const [updateTitle, setUpdateTittle]=useState(false)
    const [updateSlug, setUpdateSlug]=useState(false)

    const [formData, setFormData] = useState({
      title: '',
      new_slug: '',
    })
    
    const {
      title,
      new_slug,
    } = formData

    const onChange = (e) =>{
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const [loading, setLoading] = useState(false)

   const navigate = useNavigate()
   
    const onSubmit = e => {
      e.preventDefault()
        const config = {
          headers: {
              'Accept': 'application/json',
              'Authorization': `JWT ${localStorage.getItem('access')}`
          }
      };

      const formData = new FormData()
      formData.append('title', title)
      formData.append('slug', slug)
      formData.append('new_slug', new_slug)

      const fetchData = async()=>{
        setLoading(true)
        try {
           const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/blog/edit`, formData, config)

           if(res.status === 200){
            setLoading(false)
            setUpdateTittle(false)
            setUpdateSlug(false)
            get_blog(slug)
           }
           else{
            setLoading(false)
            setUpdateTittle(false)
            setUpdateSlug(false)
           }
        } catch (error) {
          setLoading(false)
          setUpdateTittle(false)
          setUpdateSlug(false)
          alert('error al enviar')
        }
      }
      fetchData()
    }  

    return (
        <Layout>
              <Helmet>
            <title>Yournalup | Dashboard edit</title>
            <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.Yournalup.com/" />
            <meta name="author" content='Yournalup' />
            <meta name="publisher" content='Yournalup' />

            {/* Social Media Tags */}
            <meta property="og:title" content='Yournalup | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
            <meta property="og:url" content="https://www.Yournalup.com/" />
            <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

            <meta name="twitter:title" content='Yournalup | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
            />
            <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        {
            post ?
            <>
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">{post.title}</h3>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                  <button
                    type="button"
                    className="relative mx-1 inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                   Delete
                  </button>
                  <button
                    type="button"
                    className="relative mx-1 inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                   View
                  </button>
                  <button
                    type="button"
                    className="relative mx-1 inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                   Publish
                  </button>
                  </div>

                </div>
                
             </div>
             
             <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Titulo</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {
                updateTitle ?
                <>
              <form onSubmit={e=>onSubmit(e)} className="flex w-full">
                <span className="flex-grow">
                <input
                      value={title}
                      onChange={e=>onChange(e)}
                      type="text" 
                      name="title"     
                      className="border border-gray-400 rounded-lg w-full"                 
                      required
                />
                </span>
                
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="submit"                  
                      className="cursor-pointer inline-flex rounded-md mr-2 bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Save
                    </button>
                    <div
                      onClick={()=>setUpdateTittle(false)}
                      type="button"
                      className="cursor-pointer inline-flex rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Cancel
                    </div>
                  </span>
              </form>
                </>:                         
                <>
                  <span className="flex-grow">{post.title}</span>
                  <span className="ml-4 flex-shrink-0">
                    <div
                      onClick={()=>setUpdateTittle(true)}
                      type="button"
                      className="cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Update
                    </div>
                  </span>
                </>
              }

            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Slug</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {
                updateSlug?
                <>
              <form onSubmit={e=>onSubmit(e)} className="flex w-full">
                <span className="flex-grow">
                <input
                      value={new_slug}
                      onChange={e=>onChange(e)}
                      type="text" 
                      name="new_slug"     
                      className="border border-gray-400 rounded-lg w-full"                 
                      required
                />
                </span>
                
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="submit"                  
                      className="cursor-pointer inline-flex rounded-md mr-2 bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Save
                    </button>
                    <div
                      onClick={()=>setUpdateSlug(false)}
                      type="button"
                      className="cursor-pointer inline-flex rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Cancel
                    </div>
                  </span>
              </form>
                </>:                         
                <>
                  <span className="flex-grow">{post.new_slug}</span>
                  <span className="ml-4 flex-shrink-0">
                    <div
                      onClick={()=>setUpdateSlug(true)}
                      type="button"
                      className="cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Update
                    </div>
                  </span>
                </>
              }

            </dd>
          </div>
        
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex flex-shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Update
                    </button>
                    <span className="text-gray-300" aria-hidden="true">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex flex-shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Update
                    </button>
                    <span className="text-gray-300" aria-hidden="true">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
            </>
            :
            <>loading</>
        } 
        </Layout>
    );
}

const mapStateToProps = state => ({
    post: state.blog.post  
});

export default connect(mapStateToProps, {
    get_blog
})(EditPost);
