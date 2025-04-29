import { TextProps, Text as TextRN } from "react-native"


type Props = TextProps & {

}

export default function Text({ children, ...props }: Props) {
    return (
        <TextRN {...props}>{children}</TextRN>
    )
}