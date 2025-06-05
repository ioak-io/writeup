import React, { useRef, useState } from 'react';
import { Button } from 'basicui';
import DynamicForm from '.';
import { getEditorConfig } from '../utils/EditorUtils';
import { DynamicFormHandle, SpecDefinition, ToolbarOption } from '../types/DynamicFormTypes';

const DynamicFormDemo = () => {
  const [formData, setFormData] = useState<any>({
    firstName: '',
    bio: '',
    blogContent: 'test',
    country: ['us', 'ca'],
    subscribe: true,
    interests: ['tech'],
    gender: 'male',
    title: "Roman holiday",
    subtitle: "Bell book and candle",
    subheading3: "Vertigo",
    subheading4: "Vertigo",
    subheading5: "Vertigo",
    subheading6: "Vertigo",
    numberSelect: 102,
    tags: ["t1"]
  });

  const submitActionRef = useRef<DynamicFormHandle>(null);
  const [editMode, setEditMode] = useState(false);

  const handleValidate = () => {
    const result = submitActionRef.current?.validate();
    console.log(result?.valid, result);
  };

  const handleReset = () => {
    submitActionRef.current?.reset();
  };

  const handleChange = (name: string, value: any) => {
    console.log(name, value);
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    console.log('Submitted:', event);
  };

  const editor = getEditorConfig();
  const formMetadata2: SpecDefinition = {
    fields: {
      "name": {
        type: "string",
        required: true,
        displayOptions: {
          type: "text",
          label: "Fragment name"
        }
      },
      "content": {
        type: "string",
        required: false,
        displayOptions: {
          type: "textarea"
        }
      },
      "labels": {
        type: "array",
        required: true,
        itemType: "string",
        parent: {
          domain: "fragmentLabel", field: "reference"
        },
        displayOptions: {

        }
      }
    }
  }

  const formMetadata: SpecDefinition = {
    fields: {
      fullName: {
        type: "string",
        required: true,
        validate: {
          minLength: 3,
          maxLength: 100,
          regex: "^[A-Za-z ]+$"
        },
        displayOptions: {
          label: "Full Name",
          labelDesc: "Lorem ipsum dolor sit",
          placeholder: "Enter full name",
          tooltip: "The full name of the person",
          type: "text"
        }
      },
      description: {
        type: "string",
        required: true,
        displayOptions: {
          label: "Description",
          labelDesc: "Lorem ipsum dolor sit",
          placeholder: "Describe here",
          tooltip: "Lorem tooltip",
          type: "richtext",
          toolbarOptions: [
            ToolbarOption.Bold,
            ToolbarOption.Italic,
            ToolbarOption.Underline,
            ToolbarOption.AlignLeft,
            ToolbarOption.AlignCenter,
            ToolbarOption.AlignRight,
            ToolbarOption.AlignJustify,
            ToolbarOption.BulletList,
            // ToolbarOption.Heading,
            // ToolbarOption.Heading2,
            // ToolbarOption.Heading3,
            // ToolbarOption.ClearFormatting
          ]
        }
      },
      categoryId: {
        type: "string",
        required: true,
        displayOptions: {
          label: "Category",
          labelDesc: "Lorem ipsum dolor sit",
          placeholder: "Choose a category",
          tooltip: "Classification",
          type: "autocomplete",
          optionsLookupKey: "category"
        }
      },
      age: {
        type: "number",
        validate: {
          min: 0,
          max: 120
        },
        displayOptions: {
          label: "Age",
          labelDesc: "Lorem ipsum dolor sit",
          placeholder: "Enter age",
          tooltip: "Age must be between 0 and 120",
          type: "number"
        }
      },
      numberSelect: {
        type: "number",
        displayOptions: {
          label: "Number selector",
          labelDesc: "Lorem ipsum dolor sit",
          placeholder: "Choose a number",
          tooltip: "tool tip for the number selector",
          type: "select",
          optionsLookupKey: "numberSelect"
        }
      },
      isActive: {
        type: "boolean",
        displayOptions: {
          label: "Active",
          labelDesc: "Lorem ipsum dolor sit",
          type: "checkbox"
        }
      },
      tags: {
        type: "array",
        itemType: "string",
        validate: {
          minItems: 1,
          maxItems: 10
        },
        displayOptions: {
          label: "Tags",
          labelDesc: "Lorem ipsum dolor sit",
          type: "autocomplete",
          tooltip: "Add at least one tag",
          optionsLookupKey: "tag"
        }
      },
      tagsFree: {
        type: "array",
        itemType: "string",
        validate: {
          minItems: 1,
          maxItems: 10
        },
        displayOptions: {
          label: "Tags free",
          labelDesc: "Lorem ipsum dolor sit",
          placeholder: "Type a tag name",
          type: "array",
          tooltip: "Add at least one tag",
          optionsLookupKey: "tag"
        }
      },
      contactInfo: {
        type: "object",
        displayOptions: {
          label: "Contact Information",
          labelDesc: "Lorem ipsum dolor sit",
          type: "group",
        },
        fields: {
          email: {
            type: "string",
            validate: {
              regex: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"
            },
            displayOptions: {
              label: "Email",
              labelDesc: "Lorem ipsum dolor sit",
              placeholder: "Enter email",
              type: "text"
            }
          },
          phoneNumbers: {
            type: "array",
            itemType: "string",
            validate: {
              minItems: 1
            },
            displayOptions: {
              label: "Phone Numbers",
              labelDesc: "Lorem ipsum dolor sit",
              type: "array"
            }
          },
          preferences: {
            type: "array",
            itemType: "string",
            validate: {
              minItems: 1
            },
            displayOptions: {
              label: "Preferences",
              labelDesc: "Lorem ipsum dolor sit",
              type: "select",
              optionsLookupKey: "category"
            }
          },
          testarray: {
            type: "array",
            itemType: "object",
            validate: {
              minItems: 1
            },
            fields: {
              "headline":
              {
                type: "string", displayOptions: { type: "h2" }
              },
              "headlineParagraph":
              {
                type: "string", displayOptions: { type: "h6" }
              }
            },
            displayOptions: {
              label: "Test array",
              labelDesc: "Lorem ipsum dolor sit",
              type: "array"
            }
          }
        }
      },
      addresses: {
        type: "array",
        itemType: "object",
        displayOptions: {
          label: "Addresses",
          labelDesc: "Lorem ipsum dolor sit",
          type: "array",
        },
        fields: {
          street: {
            type: "string",
            displayOptions: {
              label: "Street",
              labelDesc: "Lorem ipsum dolor sit",
              type: "text"
            }
          },
          city: {
            type: "string",
            displayOptions: {
              label: "City",
              labelDesc: "Lorem ipsum dolor sit",
              type: "text"
            }
          },
          country: {
            type: "string",
            displayOptions: {
              label: "City",
              labelDesc: "Lorem ipsum dolor sit",
              type: "select",
              optionsLookupKey: "country"
            }
          },
          geo: {
            type: "object",
            displayOptions: {
              label: "Coordinates",
              labelDesc: "Lorem ipsum dolor sit",
              type: "group",
            },
            fields: {
              lat: {
                type: "number",
                displayOptions: {
                  label: "Latitude",
                  labelDesc: "Lorem ipsum dolor sit",
                  type: "number"
                }
              },
              lng: {
                type: "number",
                displayOptions: {
                  label: "Longitude",
                  labelDesc: "Lorem ipsum dolor sit",
                  type: "number"
                }
              }
            }
          }
        }
      },
      preferences: {
        type: "enum",
        options: [
          { label: "Email", value: "email" },
          { label: "Phone", value: "phone" },
          { label: "SMS", value: "sms" }
        ],
        displayOptions: {
          label: "Preferred Contact Method",
          type: "radio-group"
        }
      },
      family: {
        type: "array",
        itemType: "object",
        displayOptions: {
          label: "Family Members",
          labelDesc: "Lorem ipsum dolor sit",
          type: "array",
        },
        fields: {
          name: {
            type: "string",
            displayOptions: {
              label: "Name",
              labelDesc: "Lorem ipsum dolor sit",
              type: "text"
            }
          },
          relation: {
            type: "enum",
            options: [
              { label: "Parent", value: "parent" },
              { label: "Sibling", value: "sibling" },
              { label: "Child", value: "child" }
            ],
            displayOptions: {
              label: "Relation",
              labelDesc: "Lorem ipsum dolor sit",
              type: "select"
            }
          },
          address: {
            type: "object",
            displayOptions: {
              label: "Address",
              labelDesc: "Lorem ipsum dolor sit",
              type: "group",
            },
            fields: {
              street: {
                type: "string",
                displayOptions: {
                  label: "Street",
                  labelDesc: "Lorem ipsum dolor sit",
                  type: "text"
                }
              },
              city: {
                type: "string",
                displayOptions: {
                  label: "City",
                  labelDesc: "Lorem ipsum dolor sit",
                  type: "text"
                }
              }
            }
          }
        }
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <DynamicForm
        editor={editor}
        ref={submitActionRef}
        metadata={formMetadata}
        data={formData}
        optionsLookupDictionary={{
          "category": [
            { name: "1", value: "Lorem ipsum" },
            { name: "2", value: "Dolor sit" },
            { name: "3", value: "ipsum dolor" },
            { name: "4", value: "lorem sit" },
            { name: "5", value: "sit ipsum" }
          ],
          "numberSelect": [
            { name: 101, value: "Hundred and one" },
            { name: 102, value: "Hundred and two" },
            { name: 103, value: "Hundred and three" },
            { name: 104, value: "Hundred and four" },
            { name: 105, value: "Hundred and five" }
          ],
          "tag": [
            { name: "t1", value: "Value 1" },
            { name: "t2", value: "Value 2" },
            { name: "t3", value: "Value 3" },
            { name: "t4", value: "Value 4" }
          ],
          "country": [
            { name: "IN", value: "India" },
            { name: "DE", value: "Germany" },
            { name: "FR", value: "France" },
            { name: "MX", value: "Mexico" }
          ]
        }}
        onChange={handleChange}
        onSubmit={handleSubmit}
        editMode={editMode}
      />
      <div className="mt-4 flex gap-2">
        <Button onClick={() => submitActionRef.current?.submit()} className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </Button>
        <Button onClick={handleValidate} className="bg-yellow-500 text-white px-4 py-2 rounded">
          Validate
        </Button>
        <Button onClick={handleReset} className="bg-gray-400 text-white px-4 py-2 rounded">
          Reset
        </Button>
        <Button onClick={() => setEditMode(!editMode)} className="bg-gray-400 text-white px-4 py-2 rounded">
          Toggle edit mode
        </Button>
      </div>
    </div>
  );
};

export default DynamicFormDemo;