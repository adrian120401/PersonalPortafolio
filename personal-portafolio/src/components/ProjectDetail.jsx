import {Modal, Image, Carousel} from "react-bootstrap"

const ProjectDetail = ({project, showDetail, setShowDetail}) => {
    return(
        <Modal
        /* fullscreen={true} */
        size="lg" 
        show={showDetail}
        onHide={() => setShowDetail(false)}
        className="modalDetail"
        >
            <Modal.Header closeButton closeVariant="white"> 
            <Modal.Title>
                {project?.title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
{/*                 <Carousel fade>
                    {project?.imgs.map(img => (
                        <Carousel.Item>
                            <Image src={img} fluid />
                        </Carousel.Item>
                    ))}
                </Carousel> */}
                <Image src={project?.imgs[0]} fluid />
                {project?.text}
            </Modal.Body>
    </Modal>
)
}

export {ProjectDetail}