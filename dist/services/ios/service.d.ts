export declare enum EImageSetType {
    IMAGE = "imageset",
    ICON = "appiconset"
}
export declare const addIosImageSetContents: (imageSetName: string, targetName: string, setType?: EImageSetType) => string;
