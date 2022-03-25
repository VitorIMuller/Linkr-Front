import { MetadataContainer } from "./style";


export default function Metadata({ url, postId, title, description, image }) {

    return (
        <MetadataContainer>
            <div className="text">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="link">{url}</div>
            </div>
            <div className="image">
                <img src={image} alt="post_image" />
            </div>
        </MetadataContainer>
    );
}