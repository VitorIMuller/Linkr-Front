import { ImageContainer, MetadataContainer, TextContainer, UrlDescription, UrlImage, UrlLink, UrlTitle } from "./style";

export default function Metadata({ url, postId, title, description, image }) {

    return (
        <MetadataContainer>
            <TextContainer>
                <UrlTitle>{title}</UrlTitle>
                <UrlDescription>{description}</UrlDescription>
                <UrlLink>{url}</UrlLink>
            </TextContainer>
            <ImageContainer>
                <UrlImage src={image} />
            </ImageContainer>
        </MetadataContainer>
    );
}