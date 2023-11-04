import { Label, TextInput } from 'flowbite-react'
import { Card } from 'flowbite-react'
import { Button } from 'flowbite-react'
import Section from '../../../../components/Section'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDoc, allDoc } from '../../../../store/action/document'
import PageTitle from '../../../../components/PageTitle'

const Index = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState(null)
  const { user } = useSelector((store) => store.user)
  const { loading } = useSelector((store) => store.doc)
  const { category: Category } = useSelector((store) => store.category)
  const dispatch = useDispatch()

  const uploadfile = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      name,
      desc,
      file,
      category,
      department: user?.department,
    }
    await dispatch(addDoc(payload))
    dispatch(allDoc())
  }
  useEffect(() => {
    if (!loading) {
      setName('')
      setDesc('')
      setCategory('')
      setFile(null)
    }
  }, [loading])
  return (
    <Section>
      <PageTitle title="Add Document" />
      <Card className="max-w-md mx-auto mt-4" href="#">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="File Name" />
            </div>
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="small"
              sizing="sm"
              type="text "
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Categories
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a category</option>
                {Category?.map((item, i) => (
                  <option key={i} value={item?.name}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Description" />
            </div>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className=" my-10">
              <label htmlFor="template" className="text-sm font-quicksand">
                <span className="text-red-600 text-bold">* </span>
                Enter Your Doc
              </label>
              <br /> <input type="file" onChange={uploadfile} required />
            </div>
          </div>
          <Button gradientMonochrome="cyan" type="submit">
            Upload
          </Button>
        </form>
      </Card>
    </Section>
  )
}

export default Index
