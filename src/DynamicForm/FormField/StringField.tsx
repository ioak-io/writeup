import React, { useEffect } from 'react';
import { Input, Label, OptionsObjectType, Select, Textarea } from 'basicui';
import { StringField } from '../../types/DynamicFormTypes';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Editor from '../../Editor';
import Toolbar from '../../Toolbar';
import Bold from '../../Toolbar/Bold';
import Italic from '../../Toolbar/Italic';
import Underline from '../../Toolbar/Underline';
import Strikethrough from '../../Toolbar/Strikethrough';
import AlignLeft from '../../Toolbar/AlignLeft';
import AlignCenter from '../../Toolbar/AlignCenter';
import AlignRight from '../../Toolbar/AlignRight';
import AlignJustify from '../../Toolbar/AlignJustify';
import BulletList from '../../Toolbar/BulletList';
import OrderedList from '../../Toolbar/OrderedList';
import BlockQuote from '../../Toolbar/BlockQuote';
import Code from '../../Toolbar/Code';
import CodeBlock from '../../Toolbar/CodeBlock';
import FontColor from '../../Toolbar/FontColor';
import HighlightColor from '../../Toolbar/HighlightColor';
import Link from '../../Toolbar/Link';
import Undo from '../../Toolbar/Undo';
import Redo from '../../Toolbar/Redo';
import HeadingDropdown from '../../Toolbar/HeadingDropdown';

// Toolbar button component mapping
const toolbarButtons = {
  bold: Bold,
  italic: Italic,
  underline: Underline,
  strikethrough: Strikethrough,
  alignLeft: AlignLeft,
  alignCenter: AlignCenter,
  alignRight: AlignRight,
  alignJustify: AlignJustify,
  bulletList: BulletList,
  orderedList: OrderedList,
  blockQuote: BlockQuote,
  code: Code,
  codeBlock: CodeBlock,
  fontColor: FontColor,
  highlightColor: HighlightColor,
  link: Link,
  undo: Undo,
  redo: Redo,
  heading: HeadingDropdown,
};

const StringFieldComponent = ({
  fieldName,
  field,
  value,
  onChange,
  optionsLookupDictionary,
  editor
}: {
  fieldName: string;
  field: StringField;
  value: any;
  onChange: (name: string, value: any) => void;
  optionsLookupDictionary: { [key: string]: OptionsObjectType[] };
  editor?: any;
}) => {
  const display = field.displayOptions || {};

  const handleChange = (event: any) => {
    onChange(fieldName, event.currentTarget.value);
  };

  if (display.type === 'richtext') {
    useEffect(() => {
      if (editor && value !== editor.getHTML()) {
        editor.commands.setContent(value || '');
      }
    }, [value]);

    useEffect(() => {
      if (!editor) return;
    
      const updateHandler = () => {
        const html = editor.getHTML();
        onChange(fieldName, html);
      };
    
      editor.on('update', updateHandler);
    
      return () => {
        editor.off('update', updateHandler);
      };
    }, [editor, fieldName, onChange]);

    const renderToolbarButtons = display.toolbarOptions?.map((option) => {
      const ToolbarButton = toolbarButtons[option as keyof typeof toolbarButtons];
      return ToolbarButton ? <ToolbarButton key={option} editor={editor} /> : null;
    });

    return (
      <div>
        <Label labelDesc={display.labelDesc}>{display.label}</Label>
        <Editor editor={editor} toolbarPlacement="top">
          {renderToolbarButtons}
        </Editor>
      </div>
    );
  }

  switch (display.type) {
    case 'textarea':
      return (
        <Textarea
          name={fieldName}
          label={display.label}
          labelDesc={display.labelDesc}
          placeholder={display.placeholder}
          value={value}
          onInput={handleChange}
        />
      );
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return (
        <Input
          className={`powerui-formelement-heading ${display.type}`}
          name={fieldName}
          label={display.label}
          placeholder={display.placeholder}
          value={value}
          onInput={handleChange}
        />
      );
    case 'select':
    case 'autocomplete':
      return (
        <Select
          name={fieldName}
          label={display.label}
          labelDesc={display.labelDesc}
          placeholder={display.placeholder}
          value={value ? [value] : []}
          autocomplete={display.type === 'autocomplete'}
          onChange={handleChange}
          options={optionsLookupDictionary[display.optionsLookupKey || ''] || []}
        />
      );
    case 'text':
      return (
        <Input
          name={fieldName}
          label={display.label}
          labelDesc={display.labelDesc}
          placeholder={display.placeholder}
          value={value}
          onInput={handleChange}
        />
      );
  }
};

export default StringFieldComponent;
