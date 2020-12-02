// components/user/Card.js
import React from "react";
import { EditorText } from "./";
import { EditorButton } from "./";
import { EditorContainer } from "./";
import { useNode, Element } from "@craftjs/core";
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import ColorPicker from 'material-ui-color-picker'

export const CardTop = ({ children }) => {
    const { connectors: { connect } } = useNode();
    return (
        <div ref={connect} className="text-only">
            {children}
        </div>
    )
}

CardTop.craft = {
    rules: {
        // Only accept Text
        canMoveIn: (incomingNode) => incomingNode.data.type == EditorText
    }
}

export const CardBottom = ({ children }) => {
    const { connectors: { connect } } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
}

CardBottom.craft = {
    rules: {
        // Only accept Buttons
        canMoveIn: (incomingNode) => incomingNode.data.type == EditorButton
    }
}


export const EditorCard = ({ padding = 20 }) => {
    return (
        <EditorContainer  padding={padding}>
            <Element is={CardTop} id="text" canvas>
                <EditorText text="Title" fontSize={20} />
                <EditorText text="Subtitle" fontSize={15} />
            </Element>
            <Element is={CardBottom} id="buttons" canvas>
                <EditorButton size="small" text="Learn more" variant="contained" color="primary" />
            </Element>
        </EditorContainer>
    )
}

export const EditorContainerSettings = () => {
    const { background, padding, actions: { setProp } } = useNode(node => ({
        background: node.data.props.background,
        padding: node.data.props.padding
    }));
    return (
        <div>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Background</FormLabel>
                <ColorPicker defaultValue={background || '#000'} onChange={color => {
                    setProp(props => props.background = color)
                }} />
            </FormControl>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Padding</FormLabel>
                <Slider defaultValue={padding} onChange={(_, value) => setProp(props => props.padding = value)} />
            </FormControl>
        </div>
    )
}

export const ContainerDefaultProps = {
    background: "#ffffff",
    padding: 3,
    position: 'relative',
    left: '310px',
    width: '100%',
    height: 'auto',
};

EditorCard.craft = {
    related: {
        // Since Card has the same settings as Container, we'll just reuse ContainerSettings 
        settings: EditorContainerSettings,
        props: ContainerDefaultProps,
    }
}