
import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import  DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer"


const Resume = () => {
  const docs = [{ uri: require("./Resume.pdf")}]
  return(
    <Container className="m-4" fluid="md">
      <Row>
        <Col sm md="8">
        <DocViewer pluginRenders={DocViewerRenderers} documents={docs} />
        </Col>
      </Row>
    </Container>
  )
}

export default Resume