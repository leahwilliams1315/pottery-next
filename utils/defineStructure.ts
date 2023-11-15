import { ConfigContext, Schema } from "sanity";
import { StructureBuilder } from "sanity/desk";

/**
 * Helper for creating and typing composable desk structure parts.
 */
export default function defineStructure<StructureType>(
  factory: (S: StructureBuilder, context: ConfigContext) => StructureType,
) {
  return factory;
}

export const mapSchemasToReferences = (schemas: Partial<Schema>[]) =>
  schemas.map((schema) => ({
    type: "reference",
    to: [{ type: schema.name }],
  }));

export const generateReferenceObjectsFromNames = (
  names: string[],
  parentName: string,
) =>
  names.map((name) => ({
    type: "reference",
    to: [{ type: name }],
    name: parentName === name ? `${name}_childRef` : name,
  }));
