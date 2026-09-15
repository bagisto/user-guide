# Attribute Input Types

Every attribute has a type. The type decides what you fill in on the product edit screen,
such as a text box, a switch or a list of options, and which settings the attribute can
use. You choose the type when you [create the attribute](./product-attribute.md), and you
can't change it afterwards.

## The types

The **Attribute Type** list offers these types, in this order:

| Type | On the product edit screen | Use it for |
|---|---|---|
| **Text** | A one-line text box. | Short values, such as a model number. |
| **Textarea** | A multi-line text box, or a text editor when **Enable Wysiwyg Editor** is on. | Longer text, such as care instructions. |
| **Price** | An amount next to your base currency symbol. It must be a number. | Extra amounts, such as a recommended retail price. |
| **Boolean** | A switch that's on or off. | Yes-or-no facts, such as whether a jacket is waterproof. |
| **Checkbox** | One checkbox for each option. You can tick any number of them. | Features, such as the rooms a lamp suits. |
| **Select** | A list of options. You pick one. | Choices such as Color, Size or Brand. |
| **Multiselect** | A list of options. You pick one or more. | Several values at once, such as the seasons a jacket suits. |
| **Date** | A date picker. | Dates, such as a release date. |
| **Datetime** | A date and time picker. | Moments, such as the start of a live event. |
| **Image** | An image upload in BMP, JPEG, JPG, PNG or WEBP format. | A picture, such as a size chart. |
| **File** | A file upload. | A document, such as a user manual. |

## Settings each type supports

Some settings can be used only with certain types. For other types they're hidden, greyed
out, or ignored when you save:

| Setting | Types |
|---|---|
| **Options** | Checkbox, Select and Multiselect. You add the choices yourself. |
| **Input Options** | Select. The options can show as a dropdown, or as color, image or text swatches. |
| **Use in Layered Navigation** | Checkbox, Select, Multiselect, Boolean and Price. |
| **Use To Create Configurable Product** | Select. |
| **Enable Wysiwyg Editor** | Textarea. |
| **Default Value** | Boolean. |
| **Input Validation** | Text. |
| **Value Per Locale** | Every type except Checkbox, Select, Multiselect and Boolean. Checkbox, Select and Multiselect attributes translate their option names instead, and Boolean attributes show **Yes** or **No**. |

The other settings, such as **Is Required** and **Value Per Channel**, appear for every type.
[Product Attributes](./product-attribute.md) describes what each setting does.

## What shoppers see

When **Use in Layered Navigation** is on, you can tick the attribute under a category's
**Filterable Attributes**, and it becomes a filter on that category's page. Search results
offer every such attribute as a filter. A **Price** attribute shows as a range slider, and
the other types show their options as checkboxes.

For a **Select** attribute that configurable products use for their variants, **Input
Options** decides how shoppers pick a variant on the product page:

| Input Options | What shoppers see |
|---|---|
| **Dropdown** | A drop-down list of the options. |
| **Color Swatch** | A colored circle for each option. |
| **Image Swatch** | A small image for each option. |
| **Text Swatch** | A button with each option's label. |

## Upload size of Image and File attributes

The largest image or file you can upload for an **Image** or **File** attribute is set
under **Configure >> Catalog >> Products**. See [Attribute](../configure/attribute.md).
