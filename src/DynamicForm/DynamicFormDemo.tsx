""// DynamicFormDemo.tsx (Rewritten with SpecField types)
import React, { useRef, useState } from 'react';
import { Button } from 'basicui';
import DynamicForm from '.';
import { getEditorConfig } from '../utils/EditorUtils';
import Editor from '../Editor';
import HeadingDropdown from '../Toolbar/HeadingDropdown';
import Bold from '../Toolbar/Bold';
import Italic from '../Toolbar/Italic';
import Underline from '../Toolbar/Underline';
import BulletList from '../Toolbar/BulletList';
import OrderedList from '../Toolbar/OrderedList';
import BlockQuote from '../Toolbar/BlockQuote';
import HighlightColor from '../Toolbar/HighlightColor';
import ClearFormatting from '../Toolbar/ClearFormatting';
import { DynamicFormHandle, SpecDefinition } from '../types/DynamicFormTypes';

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
    subheading6: "Vertigo"
  });

  const submitActionRef = useRef<DynamicFormHandle>(null);

  const handleValidate = () => {
    const result = submitActionRef.current?.validate();
    console.log(result?.valid, result);
  };

  const handleReset = () => {
    submitActionRef.current?.reset();
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    console.log('Submitted:', event);
  };

  const editor = getEditorConfig();

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
          tooltip: "Add at least one tag"
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
              type: "select"
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
        ref={submitActionRef}
        metadata={formMetadata}
        data={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        editMode
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
      </div>
    </div>
  );
};

export default DynamicFormDemo;