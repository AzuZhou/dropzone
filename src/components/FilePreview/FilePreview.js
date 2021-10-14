import { useState, useEffect } from 'react'
import FilePreviewer from 'react-file-previewer'

import SectionLoader from '../SectionLoader'
import { Container } from './styled'

const FilePreview = ({ file, base64 }) => {
  const [canShow, setCanShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanShow(true)
      setIsLoading(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  // TODO: replace react-file-previewer

  return (
    <Container opacity={canShow ? 1 : 0}>
      <FilePreviewer
        file={{ data: base64, mimeType: file.type, name: file.name }}
        hideControls={true}
      />
      {canShow && isLoading ? <SectionLoader /> : null}
    </Container>
  )
}

export default FilePreview
