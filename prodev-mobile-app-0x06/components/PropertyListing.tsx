import { View, Text } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { useState } from "react";
import { PropertListing, PropertyListingProps } from "../interfaces";
import { styles } from "@/styles/_propertyCardStyle";

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View style={styles.PropertyListingCardContainer}>
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;