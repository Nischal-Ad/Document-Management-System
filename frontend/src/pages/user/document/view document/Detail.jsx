import { Modal } from 'flowbite-react'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'

const Detail = ({ open, close, data }) => {
  const docs = [
    {
      uri: data?.doc?.url,
    },
  ]

  return (
    <Modal show={open} onClose={() => close()}>
      <Modal.Header>{data?.name}</Modal.Header>
      <Modal.Body style={{ overflow: 'auto' }}>
        <div className="w-[100%]" style={{ height: '90dvh' }}>
          <DocViewer
            documents={docs}
            config={{
              header: {
                disableHeader: true,
                disableFileName: true,
                retainURLParams: false,
              },
            }}
            pluginRenderers={DocViewerRenderers}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-between">
        <p>{data?.desc}</p>
        <a
          href={data?.doc?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-800 p-2 ml rounded-md font-medium text-white"
        >
          Download
        </a>
      </Modal.Footer>
    </Modal>
  )
}

export default Detail
