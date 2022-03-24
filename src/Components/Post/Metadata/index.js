import { MetadataContainer } from "./style";


export default function Metadata({ url, postId, title, description, image }) {

    return (
        <MetadataContainer>
            <div className="text">
                <div className="title">{title}</div>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat inventore ipsa iure exercitationem numquam! Amet nihil cumque temporibus totam accusantium vel et. Doloribus non repellendus eveniet, quos ab sapiente?</div>
                <div className="link">{url}</div>
            </div>
            <div className="image">
                <img src={image} alt="post_image" />
            </div>
        </MetadataContainer>
    );
}